import { NextResponse } from "next/server";

export const revalidate = 290;

export async function GET() {
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
      throw new Error(`Token fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(
      {
        access_token: data.access_token,
        expires_in: data.expires_in,
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Failed to fetch token:", error);
    return NextResponse.json(
      { error: "Failed to fetch token" },
      { status: 500 }
    );
  }
}
