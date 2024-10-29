// BannerPosition/Voters.ts
import { Article } from "@contexts/ArticlesContext";

// Výchozí volič: Náhodný výběr článku
export const defaultVoter = (articles: Article[]): Article => {
  const randomIndex = Math.floor(Math.random() * articles.length);
  return articles[randomIndex];
};

// Funkce na základě názvu voliče
export const getVoterFunction = (voterName: string) => {
  switch (voterName) {
    case "randomVoter":
      return defaultVoter;
    case "specificAttributeVoter":
      return specificAttributeVoter;
    default:
      return defaultVoter;
  }
};

// Ukázková funkce pro volič, která vybírá článek na základě nějakého specifického atributu
export const specificAttributeVoter = (articles: Article[], attributes: object | null): Article => {
  // Příklad logiky: Vybere článek s nadpisem, který obsahuje slovo z attributes
  return articles.find(article => article.title.includes(attributes?.keyword || "")) || articles[0];
};
