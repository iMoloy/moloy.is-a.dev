import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/search/commits?q=author:iMoloy", {
      headers: {
        Accept: "application/vnd.github.cloak-preview",
      },
      next: { revalidate: 3600 } // Cache for 1 hour to avoid rate limits
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return NextResponse.json({ total_count: data.total_count || 484 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ total_count: 484 }); // Fallback
  }
}
