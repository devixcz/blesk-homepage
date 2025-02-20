import { ArticlesProvider } from "@contexts/ArticlesContext";

import PageSections from "./components/PageSections.client";
import Layout from "./layouts/Default";
import { fetchGraphqlArticles } from "./lib/actions/graphql-articles";
import { fetchRssArticles } from "./lib/actions/rss-articles";
import { fetchVideoArticles } from "./lib/actions/video-articles";

export default async function Home() {
  const [rssArticles, graphqlArticles, videoArticles] = await Promise.all([
    fetchRssArticles(),
    fetchGraphqlArticles(),
    fetchVideoArticles(),
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
        <Layout>
          <PageSections />
        </Layout>
      </ArticlesProvider>
    </>
  );
}
