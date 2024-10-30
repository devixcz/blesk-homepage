// app/api/rss/route.ts
import { NextResponse } from "next/server";
import Parser from "rss-parser";
import axios from "axios";
import * as cheerio from 'cheerio';


const parser = new Parser();

// Funkce pro extrakci og:image z dané URL
async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const ogImage = $('meta[property="og:image"]').attr("content");
    return ogImage || null;
  } catch (error) {
    console.error(`Nepodařilo se načíst og:image z ${url}:`, error);
    return null;
  }
}

export async function GET() {
  const feedUrl = "https://www.blesk.cz/rss"; // Změňte na skutečnou adresu RSS feedu
  try {
    // Načtení RSS feedu
    const feed = await parser.parseURL(feedUrl);

    // Proměnná pro transformovaný obsah článků
    const articles = await Promise.all(
      feed.items.map(async (item, index) => {
        // Získání og:image z URL článku
        const ogImage = item.link ? await fetchOgImage(item.link) : null;
        
        const match = item.title?.match(/(.*?[.!?:])\s*(.*)/);
        
        const title = match[2] || item.title;
        const overline = match[1] || null;
        

        return {
          title: title || "Bez názvu",
          href: item.link || "#",
          overline: overline,
          image: {
            src: ogImage || `https://picsum.photos/seed/article${index}/800/600`,
            alt: item.title || "Obrázek článku",
          },
        };
      })
    );

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Chyba při načítání RSS:", error);
    return NextResponse.json({ error: "Nepodařilo se načíst RSS feed" }, { status: 500 });
  }
}
