import { NextResponse } from "next/server";

export async function GET() {
  try {
    const formData = new URLSearchParams();
    formData.append("username", process.env.API_TOKEN_USERNAME!);
    formData.append("password", process.env.API_TOKEN_PASSWORD!);

    const response = await fetch(process.env.API_TOKEN_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Token fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      access_token: data.access_token,
      expires_in: data.expires_in,
    });
  } catch (error) {
    console.error("Failed to fetch token:", error);
    return NextResponse.json(
      { error: "Failed to fetch token" },
      { status: 500 }
    );
  }
}
