// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: "Hello from Vercel! TikTok Shop plugin backend is alive 🚀",
    timestamp: new Date().toISOString()
  });
}
