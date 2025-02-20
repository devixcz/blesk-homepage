"use client";

import { ApolloError } from "@apollo/client";
import React, { createContext, useContext, ReactNode } from "react";

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
  image: {
    src: string;
    alt: string;
  };
  top?: number;
  section?: string;
  metadata?: { [key: string]: string | number };
}

/**
 * ArticlesContextProps
 *
 * @property {Article[]} articles - List of articles
 * @property {string | null} error - Error message
 * @see https://reactjs.org/docs/context.html
 * @see https://reactjs.org/docs/context.html#reactcreatecontext
 */
interface ArticlesContextProps {
  articles: Article[];
  error?: string | ApolloError | null;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(
  undefined
);

/**
 * ArticlesProviderProps
 *
 * @param {ReactNode} children - Children components
 * @param {Article[]} articles - RSS articles
 * @param {Article[]} initialArticles - Initial articles for mocking purposes
 */
interface ArticlesProviderProps {
  children: ReactNode;
  articles?: Article[];
  initialArticles?: Article[];
  error?: string | ApolloError | null;
}

/**
 * ArticlesProvider providing list of articles, either from real article sources or from initial data
 * Initial data are used for mocking purposes
 * You should not use both real articles and initialArticles at the same time
 *
 * @param {ArticlesProviderProps} props
 * @param {ReactNode} props.children - Children components
 * @param {Article[]} props.articles - Articles
 * @param {Article[]} props.initialArticles - Initial articles for mocking purposes
 * @param {string | null} props.error - Error message
 */
export const ArticlesProvider = ({
  children,
  articles,
  initialArticles,
  error,
}: ArticlesProviderProps) => {
  if (!articles && !initialArticles) {
    throw new Error(
      "You must provide either real articles or initialArticles to ArticlesProvider"
    );
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles: articles ?? initialArticles ?? [],
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
