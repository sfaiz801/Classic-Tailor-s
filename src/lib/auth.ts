import crypto from 'crypto';

export const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'classictailors.mir@gmail.com').toLowerCase().trim();
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ClassicTailor@1995';
export const JWT_SECRET = process.env.JWT_SECRET || 'classic-tailor-super-secret-key-mirganj-bihar-1995';

export interface AdminUser {
  email: string;
  role: 'superadmin';
  name: string;
  shop: string;
}

// Generate simple HMAC signed token
export function createToken(email: string): string {
  const payload = JSON.stringify({
    email,
    role: 'superadmin',
    timestamp: Date.now(),
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  });
  
  const base64Payload = Buffer.from(payload).toString('base64url');
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(base64Payload)
    .digest('base64url');
    
  return `${base64Payload}.${signature}`;
}

// Verify token
export function verifyToken(token: string): AdminUser | null {
  try {
    if (!token || !token.includes('.')) return null;
    const [base64Payload, signature] = token.split('.');
    
    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(base64Payload)
      .digest('base64url');
      
    if (signature !== expectedSignature) return null;
    
    const payload = JSON.parse(Buffer.from(base64Payload, 'base64url').toString('utf8'));
    
    if (Date.now() > payload.expiresAt) return null;
    if (payload.email.toLowerCase() !== ADMIN_EMAIL) return null;
    
    return {
      email: payload.email,
      role: 'superadmin',
      name: 'Masoom Ahmad / Faiz Siddique',
      shop: "Classic Tailor's"
    };
  } catch (error) {
    return null;
  }
}
