import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// 1. Specify public routes
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    // 3. Decrypt the session from the cookie
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    console.log(session);

    // 4. Redirect to /login if the user is not authenticated
    if (!isPublicRoute && !session?.uuid) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (path !== '/' && isPublicRoute && session?.uuid) {
        return NextResponse.redirect(new URL('/app', req.nextUrl));
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.uuid &&
        !req.nextUrl.pathname.startsWith('/app')
    ) {
        return NextResponse.redirect(new URL('/app', req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
