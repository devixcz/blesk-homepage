"use server";

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

interface AuthToken {
  token: string;
  expiresAt: number;
}

let authToken: AuthToken | null = null;

export async function fetchToken(): Promise<AuthToken | null> {
  try {
    console.log("Fetching new token...");

    // First do a quick check if we can reach the API at all (VPN check)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1000);

      // Try to reach the token URL with a HEAD request first
      const checkResponse = await fetch(process.env.API_TOKEN_URL!, {
        method: "HEAD",
        signal: controller.signal,
      }).catch((e) => {
        if (e.name === "AbortError") {
          console.warn("VPN check timed out - likely not connected");
          return null;
        }
        throw e;
      });

      clearTimeout(timeoutId);

      if (!checkResponse) {
        console.warn("VPN check failed - skipping token fetch");
        return null;
      }
    } catch (error) {
      console.warn("VPN check failed:", error);
      return null;
    }

    // If we get here, the API is reachable, so proceed with token fetch
    const formData = new URLSearchParams();
    formData.append("username", process.env.API_TOKEN_USERNAME!);
    formData.append("password", process.env.API_TOKEN_PASSWORD!);

    // Use AbortController for the main request too
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const response = await fetch(process.env.API_TOKEN_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
      cache: "no-store",
      signal: controller.signal,
    }).catch((e) => {
      if (e.name === "AbortError") {
        console.warn("Token fetch timed out");
        return null;
      }
      throw e;
    });

    clearTimeout(timeoutId);

    if (!response || !response.ok) {
      console.error(`Token fetch failed with status ${response?.status}`);
      return null;
    }

    const data = (await response.json()) as TokenResponse;

    return {
      token: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Failed to fetch token:", error);
    return null;
  }
}

export async function getValidTokenAction(): Promise<string | null> {
  if (authToken && authToken.expiresAt > Date.now()) {
    console.log("Using cached token");
    return authToken.token;
  }

  authToken = await fetchToken();
  return authToken?.token ?? null;
}
