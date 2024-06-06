// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    const host = req.headers.get('host')

    if (host) {
        // Check if it's localhost or an IPv6 loopback address
        const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1') || host.includes('[::1]')
        if (!host.startsWith('www.') && !isLocalhost) {
            return NextResponse.redirect(`https://www.${host}${req.nextUrl.pathname}`, 301)
        }
    }

    // Continue to the next middleware or route handler
    return NextResponse.next()
}
