import { ArticlesProvider } from "@contexts/ArticlesContext";

import PageSections from "./components/PageSections.client";
import { fetchGraphqlArticlesAction } from "./lib/actions/graphql-articles-action";
import { fetchRssArticlesAction } from "./lib/actions/rss-articles-action";
import { fetchVideoArticlesAction } from "./lib/actions/video-articles-action";

export default async function Home() {
  const [rssArticles, graphqlArticles, videoArticles] = await Promise.all([
    fetchRssArticlesAction(),
    fetchGraphqlArticlesAction(),
    fetchVideoArticlesAction(),
  ]);

  const articles = [
    ...(rssArticles.data ?? []),
    ...(graphqlArticles.data ?? []),
    ...(videoArticles.data ?? []),
  ];

  const error =
    rssArticles.error || graphqlArticles.error || videoArticles.error;

  return (
    <>
      <ArticlesProvider articles={articles} error={error}>
        <PageSections />
      </ArticlesProvider>
    </>
  );
}
