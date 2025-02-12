export { default } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isProduction = process.env.DATASET === 'production';
const corsOrigins = isProduction
  ? ['http://localhost:3000', 'http://127.0.0.1:1337']
  : ['*'];

export function middleware(req: NextRequest) {
  const origin = req.headers.get('origin');
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  res.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (corsOrigins.includes('*') || corsOrigins.includes(origin || '')) {
    res.headers.set('Access-Control-Allow-Origin', origin || '*');
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
