import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { TokensType } from './lib/types/TokensType';

interface authToken {
  exp: number,
}

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;

  if (!session) return NextResponse.redirect(new URL('/login', request.url));

  const tokens: TokensType = JSON.parse(session);
  const { exp: expAccesss } = jwtDecode<authToken>(tokens.access_token);
  const { exp: expRefresh } = jwtDecode<authToken>(tokens.refresh_token);

  if (Date.now() >= expRefresh * 1000) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('session');

    return response;
  };

  if (Date.now() >= expAccesss * 1000) {
    const response = NextResponse.next();
    response.cookies.delete('session');

    const params: RequestInit = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokens.refresh_token
      })
    };

    try {
      const res = await fetch(`${process.env.API_ENDPOINT}/auth/refresh`, params)
      if (!res.ok) throw new Error(res.status.toString());
      const data: TokensType = await res.json();

      const response = NextResponse.next();
      response.cookies.set({
        name: 'session',
        value: JSON.stringify(data)
      });
      response.headers.set("Authorization", `Bearer ${data.access_token}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|login).*)'],
}
