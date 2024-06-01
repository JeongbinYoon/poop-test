import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === 'production',
    salt:
      process.env.NODE_ENV === 'production'
        ? '__Secure-authjs.session-token'
        : 'authjs.session-token',
  });
  console.log('token', token); // log를 확인

  if (token) {
    return NextResponse.json(token);
  }

  return NextResponse.json(
    { message: 'Token을 확인해주세요.' },
    { status: 401 },
  );
}
