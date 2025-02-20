// contexts/PageSectionContext.tsx
import { ApolloError } from "@apollo/client";
import React, { createContext, ReactNode, useContext, useMemo } from "react";

import { Article, useArticles } from "./ArticlesContext";
interface PageSectionContextProps {
  articles: Article[];
  error?: string | ApolloError | null;
}

const PageSectionContext = createContext<PageSectionContextProps | undefined>(
  undefined
);

interface PageSectionProviderProps {
  children: ReactNode;
  filterFunction?: (articles: Article[]) => Article[];
}

export const PageSectionProvider = ({
  children,
  filterFunction,
}: PageSectionProviderProps) => {
  const { articles, error } = useArticles();

  // Filtrované články na základě zadané funkce
  const filteredArticles = useMemo(() => {
    return filterFunction ? filterFunction(articles) : articles;
  }, [articles, filterFunction]);

  return (
    <PageSectionContext.Provider value={{ articles: filteredArticles, error }}>
      {children}
    </PageSectionContext.Provider>
  );
};

export const usePageSection = () => {
  const context = useContext(PageSectionContext);
  if (!context) {
    throw new Error(
      "usePageSection musí být použit uvnitř PageSectionProvider"
    );
  }
  return context;
};
