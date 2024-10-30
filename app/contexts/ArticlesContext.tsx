import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

export interface Article {
  title: string;
  href: string;
  overline?: string;
  image: string;
  top?: number;
  section?: string;
}

interface ArticlesContextProps {
  articles: Article[]; // Seznam všech článků
  isLoading: boolean;
  error: string | null;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(
  undefined
);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/rss");
        setArticles(response.data);
      } catch (err) {
        console.error(err);
        setError("Nepodařilo se načíst články");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, isLoading, error }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};
