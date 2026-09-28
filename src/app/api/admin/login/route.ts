import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_EMAIL, ADMIN_PASSWORD, createToken } from '@/lib/auth';

// Simple in-memory brute-force rate limiter
const loginAttempts = new Map<string, { count: number; lockedUntil: number }>();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'local-user';
    const now = Date.now();

    // Check rate limiting
    const attempt = loginAttempts.get(ip);
    if (attempt && attempt.lockedUntil > now) {
      const waitSeconds = Math.ceil((attempt.lockedUntil - now) / 1000);
      return NextResponse.json(
        { error: `Too many failed attempts. Please wait ${waitSeconds} seconds.` },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, password } = body;

    const normalizedEmail = (email || '').toLowerCase().trim();

    // Validate email
    if (normalizedEmail !== ADMIN_EMAIL) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: 'Unauthorized email. Only official Classic Tailor Gmail is allowed.' },
        { status: 401 }
      );
    }

    // Validate password
    if (password !== ADMIN_PASSWORD) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: 'Invalid password. Please check your credentials.' },
        { status: 401 }
      );
    }

    // Reset failed attempts on success
    loginAttempts.delete(ip);

    // Create session token
    const token = createToken(normalizedEmail);

    const response = NextResponse.json({
      success: true,
      message: 'Super Admin Login Successful',
      user: {
        email: normalizedEmail,
        role: 'superadmin',
        name: 'Masoom Ahmad / Faiz Siddique',
        shop: "Classic Tailor's"
      }
    });

    // Set secure HttpOnly cookie
    response.cookies.set({
      name: 'classic_admin_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

function recordFailedAttempt(ip: string) {
  const attempt = loginAttempts.get(ip) || { count: 0, lockedUntil: 0 };
  attempt.count += 1;
  if (attempt.count >= 5) {
    attempt.lockedUntil = Date.now() + 15 * 60 * 1000; // 15 min lock
  }
  loginAttempts.set(ip, attempt);
}
