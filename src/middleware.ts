/* eslint-disable react-hooks/rules-of-hooks */
import { NextRequest, NextResponse } from 'next/server';
import { Role } from '@/constants';
import { verifyToken } from './utils/jwt';
import { cookies } from 'next/headers';

const AuthRoutes = ['/login', '/register'];
const commonPrivateRoutes = [
    '/dashboard/profile',
    '/dashboard/my-requests',
    '/dashboard/requests-to-me',
    '/dashboard/change-password',
    '/blood-request',
];
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = cookies().get('accessToken')?.value;
    // console.log(token);
    
    if (!token) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    if (
        token &&
        (commonPrivateRoutes.includes(pathname) ||
            commonPrivateRoutes.some((route) => pathname.startsWith(route)))
    ) {
        return NextResponse.next();
    }

    let decodedData = null;

    if (token) {
        decodedData = verifyToken(token) as any;
    }

    const role = decodedData?.role;

    // Define role-based access control
    const roleBasedAccess = {
        [Role.SUPER_ADMIN]: ['/dashboard/all-requests', '/dashboard/manage-users'],
        [Role.ADMIN]: ['/dashboard/all-requests', '/dashboard/manage-users'],
        [Role.MODERATOR]: ['/dashboard/all-requests'],
    };

    // Check if the user has access to the requested path
    const isAuthorized = Object.entries(roleBasedAccess).some(([userRole, paths]) => {
        return role === userRole && paths.some(path => pathname.startsWith(path));
    });

    // Allow access to common paths and protected paths for authorized roles
    if (isAuthorized) {
        return NextResponse.next();
    }

    // If not authorized, redirect to a 403 page or login
    return NextResponse.redirect(new URL('/403', req.url)); // Assuming you have a 403 error page
}

export const config = {
    matcher: ['/dashboard/:page*', '/blood-request'],
};
