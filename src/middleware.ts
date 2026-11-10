import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Tautan demo lama memakai `/?subdomain=nama` di portal.
 * Setelah apex menjadi marketing, arahkan ke portal di domain aplikasi.
 */
export function middleware(request: NextRequest) {
  const subdomain = request.nextUrl.searchParams.get('subdomain');

  if (subdomain) {
    const target = new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://app.quriva.tech');
    target.searchParams.set('subdomain', subdomain);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
