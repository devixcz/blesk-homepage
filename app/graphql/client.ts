import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

interface AuthToken {
  token: string;
  expiresAt: number;
}

let authToken: AuthToken | null = null;

const fetchToken = async (): Promise<AuthToken> => {
  try {
    const response = await fetch("/api/auth/token", {
      cache: "no-store",
      headers: {
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`Token fetch failed with status ${response.status}`);
    }

    const data = (await response.json()) as TokenResponse;

    return {
      token: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Failed to fetch token:", error);
    throw error;
  }
};

const getValidToken = async (): Promise<string> => {
  if (authToken && authToken.expiresAt > Date.now()) {
    return authToken.token;
  }

  authToken = await fetchToken();
  return authToken.token;
};

const authLink = setContext(async (_, { headers }) => {
  const token = await getValidToken();

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (
          err.extensions?.code === "UNAUTHENTICATED" ||
          err.message.includes("token")
        ) {
          authToken = null;

          return forward(operation);
        }
      }
    }

    if (networkError) {
      console.error("Network error:", networkError);
    }
  }
);

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL_URL!,
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
