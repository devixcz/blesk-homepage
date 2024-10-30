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
    default:
      return defaultVoter;
  }
};
