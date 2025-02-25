import { from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

import { getValidTokenAction } from "@/app/lib/actions/token-action";

const apiUrl = process.env.API_GRAPHQL_URL!;

const httpLink = new HttpLink({
  uri: apiUrl!,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getValidTokenAction();

  // If no token (likely VPN issue), return without auth header
  if (!token) {
    console.warn("No auth token available - VPN might be disconnected");
    return { headers };
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  // Log errors but don't throw - let the query continue with empty data
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.warn(
        `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
      );
    }
  }

  if (networkError) {
    console.warn(`[Network error]: ${networkError}`);
  }

  // Modify the result to return empty data instead of erroring
  const result = operation.getContext().response?.data ?? {};
  operation.setContext({ response: { data: result } });
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });
});
