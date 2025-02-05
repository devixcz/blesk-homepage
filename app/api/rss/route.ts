// app/api/rss/route.ts
import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["top"],
  },
});

interface Metadata {
  ogImage: string | undefined;
  section: string | undefined;
}

async function fetchMetadata(url: string): Promise<Metadata | null> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const ogImage = $('meta[property="og:image"]').attr("content");
    const section = $('meta[property="article:section"]').attr("content");
    return {
      ogImage: ogImage,
      section: section,
    };
  } catch (error) {
    console.error(`Nepodařilo se načíst metadata ${url}:`, error);
    return null;
  }
}

export async function GET() {
  const feedUrl = "https://www.blesk.cz/rss";
  try {
    const feed = await parser.parseURL(feedUrl);

    const articles = await Promise.all(
      feed.items.map(async (item, index) => {
        if (!item.link) {
          return null;
        }

        const metadata = await fetchMetadata(item.link);

        const match = item.title?.match(/(.*?[.!?:])\s*(.*)/);

        const title = match
          ? match[1].length > match[2].length
            ? match[1]
            : match[2]
          : item.title;
        const overline = match
          ? match[1].length <= match[2].length
            ? match[1]
            : match[2]
          : null;

        return {
          title: title || "Bez názvu",
          href: item.link || "#",
          top: item.top || 0,
          section: metadata?.section || null,
          overline: overline,
          image: {
            src:
              metadata?.ogImage ||
              `https://picsum.photos/seed/article${index}/800/600`,
            alt: item.title || "Obrázek článku",
          },
        };
      })
    );

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Chyba při načítání RSS:", error);
    return NextResponse.json(
      { error: "Nepodařilo se načíst RSS feed" },
      { status: 500 }
    );
  }
}
