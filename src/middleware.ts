import { type NextRequest } from 'next/server';

const config = {
  matcher: [
    '/((?!api|_next/static/|_next/image/|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

function middleware(req: NextRequest) {
  const {
    nextUrl: { pathname },
  } = req;

  if (!pathname.includes('/_next/')) {
    // Example for logging page views
    console.log(`Logging ${pathname}`);
  }
}

export { config, middleware };
