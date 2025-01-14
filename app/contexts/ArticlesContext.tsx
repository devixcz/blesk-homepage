import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

/**
 * Article
 *
 * @property {string} title - Title of the article
 * @property {string} href - URL of the article
 * @property {string} overline - Overline of the article
 * @property {string} image - Image URL of the article
 * @property {number} top - Top position of the article
 * @property {string} section - Section of the article
 * @property {object} metadata - Additional metadata
 */
export interface Article {
  title: string;
  href: string;
  overline?: string;
  image: string;
  top?: number;
  section?: string;
  metadata?: { [key: string]: string | number };
}

/**
 * ArticlesContextProps
 *
 * @property {Article[]} articles - List of articles
 * @property {boolean} isLoading - Loading state
 * @property {string | null} error - Error message
 * @see https://reactjs.org/docs/context.html
 * @see https://reactjs.org/docs/context.html#reactcreatecontext
 */
interface ArticlesContextProps {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(
  undefined
);

/**
 * ArticlesProviderProps
 *
 * @param {ReactNode} children - Children components
 * @param {string} apiUrl - URL for fetching articles from API
 * @param {Article[]} initialArticles - Initial articles for mocking purposes
 */
interface ArticlesProviderProps {
  children: ReactNode;
  apiUrl?: string;
  initialArticles?: Article[];
}

/**
 * ArticlesProvider providing list of articles, either from API or from initial data
 * Initial data are used for mocking purposes
 * You should not use both apiUrl and initialArticles at the same time
 *
 * @param {ArticlesProviderProps} props
 * @param {ReactNode} props.children - Children components
 * @param {string} props.apiUrl - URL for fetching articles from API
 * @param {Article[]} props.initialArticles - Initial articles for mocking purposes
 */
export const ArticlesProvider = ({
  children,
  apiUrl,
  initialArticles,
}: ArticlesProviderProps) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles || []);
  const [isLoading, setIsLoading] = useState<boolean>(!initialArticles);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialArticles) {
      setIsLoading(false);
      return;
    }

    if (!apiUrl) {
      throw new Error(
        "You must provide either apiUrl or initialArticles to ArticlesProvider"
      );
    }

    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiUrl);
        setArticles(response.data);
      } catch (err) {
        console.error(err);
        setError("Nepodařilo se načíst články");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [apiUrl, initialArticles]);

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
