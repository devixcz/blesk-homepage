"use server";

import type { Article } from "@/app/contexts/ArticlesContext";
import { query } from "@/app/graphql/client";
import { GET_ARTICLES } from "@/app/graphql/queries";

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
      image: {
        src: node.mainImageAsset?.url
          ? `https://${node.mainImageAsset.url}`
          : "",
        alt: node.mainImageAsset?.alt || "",
      },
    }))
    .filter((article) => article.href && article.image);
};

export async function fetchGraphqlArticlesAction() {
  console.log("Fetching gql articles");
  const { data, error } = await query({
    query: GET_ARTICLES,
  });
  console.log("Fetched gql articles");
  return {
    data: data ? transformGraphQLArticles(data as ArticlesData) : [],
    error: error,
  };
}
