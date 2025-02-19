import { useQuery } from "@apollo/client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { GET_ARTICLES } from "../graphql/queries";

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

interface GraphQLArticle {
  title: string;
  url: string | null;
  mainImageAsset: {
    url: string;
    alt: string | null;
  } | null;
}

interface ArticleEdge {
  node: GraphQLArticle;
}

interface ArticlesData {
  articles: {
    edges: ArticleEdge[];
  };
}

/**
 * Transform GraphQL articles data into our Article format
 * Adds https:// to URLs and images, filters out invalid entries
 */
const transformGraphQLArticles = (data: ArticlesData): Article[] => {
  return data.articles.edges
    .map(({ node }) => ({
      title: node.title,
      href: node.url ? `https://${node.url}` : "",
      image: node.mainImageAsset?.url
        ? `https://${node.mainImageAsset.url}`
        : "",
    }))
    .filter((article) => article.href && article.image);
};

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

  const {
    data: articlesData,
    loading: articlesLoading,
    error: articlesError,
  } = useQuery(GET_ARTICLES);

  const graphqlArticles = articlesData
    ? transformGraphQLArticles(articlesData as ArticlesData)
    : [];

  if (articlesLoading) {
    console.log("GraphQL Articles are loading");
  }

  if (articlesError) {
    console.error("GraphQL Articles error", articlesError);
  }

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

  const contextArticles =
    graphqlArticles.length > 0 ? [...articles, ...graphqlArticles] : articles;

  return (
    <ArticlesContext.Provider
      value={{
        articles: contextArticles,
        isLoading: articlesLoading || isLoading,
        error,
      }}
    >
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
