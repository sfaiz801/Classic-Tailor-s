import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('classic_admin_session')?.value;
  
  if (!token) {
    return NextResponse.json({ authenticated: false, user: null });
  }

  const user = verifyToken(token);
  if (!user) {
    return NextResponse.json({ authenticated: false, user: null });
  }

  return NextResponse.json({
    authenticated: true,
    user
  });
}
