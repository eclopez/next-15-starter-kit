import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    console.log(`tracking: ${JSON.stringify(res)}`);

    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}
