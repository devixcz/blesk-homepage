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
    const formData = new URLSearchParams();
    formData.append("username", process.env.API_TOKEN_USERNAME!);
    formData.append("password", process.env.API_TOKEN_PASSWORD!);

    const response = await fetch(process.env.API_TOKEN_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Token fetch failed with status ${response.status}`);
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

export async function getValidToken(): Promise<string | null> {
  if (authToken && authToken.expiresAt > Date.now()) {
    return authToken.token;
  }

  authToken = await fetchToken();
  return authToken?.token ?? null;
}
