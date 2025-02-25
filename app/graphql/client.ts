import { from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

import { getValidTokenAction } from "@/app/lib/actions/token-action";

// Create a fetch wrapper that won't throw on network errors
const safeFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  try {
    return await fetch(input, init);
  } catch (error) {
    console.warn("Network request failed (VPN might be disconnected):", error);
    // Return a mock Response object that Apollo can handle
    return new Response(JSON.stringify({ data: null }), {
      status: 200,
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }
};

const apiUrl = process.env.API_GRAPHQL_URL!;

const httpLink = new HttpLink({
  uri: apiUrl!,
  fetch: safeFetch,
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
