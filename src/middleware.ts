import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const response = await fetch('http://localhost:3000/api/track', {
      method: 'POST',
      body: JSON.stringify({
        path: request.nextUrl.pathname,
        searchParams: request.nextUrl.search,
      }),
    });

    if (response.ok) {
      return NextResponse.next();
    } else {
      return new Response(response.statusText, { status: response.status });
    }
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const config = {
  matcher: ['/', '/about'],
};
