"use server";

import * as cheerio from "cheerio";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["top"],
  },
});

interface Article {
  title: string;
  href: string;
  top: number;
  section?: string;
  overline?: string;
  image: {
    src: string;
    alt: string;
  };
}

interface MetadataResult {
  href: string;
  metadata: {
    ogImage?: string;
    section?: string;
  };
}

function parseArticleTitle(title: string | undefined) {
  const match = title?.match(/(.*?[.!?:])\s*(.*)/);
  return {
    title: match
      ? match[1].length > match[2].length
        ? match[1]
        : match[2]
      : title,
    overline: match
      ? match[1].length <= match[2].length
        ? match[1]
        : match[2]
      : null,
  };
}

async function fetchSectionMetadata(
  articles: Article[]
): Promise<MetadataResult[]> {
  try {
    const results = await Promise.all(
      articles.map(async (article): Promise<MetadataResult | null> => {
        try {
          const response = await fetch(article.href, {
            next: {
              revalidate: 3600,
            },
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch metadata: ${response.status}`);
          }

          const html = await response.text();
          const $ = cheerio.load(html);
          return {
            href: article.href,
            metadata: {
              section:
                $('meta[property="article:section"]').attr("content") ??
                undefined,
            },
          };
        } catch (error) {
          console.warn(`Failed to fetch metadata for ${article.href}:`, error);
          return null;
        }
      })
    );

    return results.filter(
      (result): result is MetadataResult => result !== null
    );
  } catch (error) {
    console.error("Section metadata fetch failed:", error);
    return [];
  }
}

function applySectionMetadata(
  articles: Article[],
  metadataResults: MetadataResult[]
): void {
  const metadataMap = new Map<string, MetadataResult["metadata"]>();
  metadataResults.forEach((result) => {
    metadataMap.set(result.href, result.metadata);
  });

  articles.forEach((article) => {
    const metadata = metadataMap.get(article.href);
    if (metadata && metadata.section) {
      article.section = metadata.section;
    }
  });
}

export async function fetchRssArticlesAction() {
  console.time("rss-total");
  const feedUrl = "https://www.blesk.cz/rss";

  try {
    console.time("rss-feed-fetch");
    const response = await fetch(feedUrl, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);
    console.timeEnd("rss-feed-fetch");

    const articles = feed.items
      .filter((item) => item.link)
      .map((item, index) => {
        const { title, overline } = parseArticleTitle(item.title);

        return {
          title: title || "Bez názvu",
          href: item.link || "#",
          top: item.top || 0,
          section: undefined,
          overline: overline || undefined,
          image: {
            src: `https://picsum.photos/seed/article${index}/800/600`,
            alt: item.title || "Obrázek článku",
          },
        };
      });

    console.time("section-metadata-fetch");
    const metadataResults = await fetchSectionMetadata(articles);
    console.timeEnd("section-metadata-fetch");

    console.log(
      `Fetched section metadata for ${metadataResults.length} articles`
    );

    applySectionMetadata(articles, metadataResults);

    console.timeEnd("rss-total");
    return {
      data: articles,
      error: null,
    };
  } catch (error) {
    console.timeEnd("rss-total");
    console.error("Chyba při načítání RSS:", error);
    return {
      data: [],
      error: error instanceof Error ? error.message : "Neznámá chyba",
    };
  }
}
