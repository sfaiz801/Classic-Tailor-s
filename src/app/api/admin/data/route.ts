import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyToken } from '@/lib/auth';
import { services as defaultServices } from '@/data/services';
import { galleryItems as defaultGallery } from '@/data/gallery';
import { shopInfo as defaultShop } from '@/data/shop';

const dataFilePath = path.resolve('src/data/liveContent.json');

function getInitialData() {
  return {
    services: defaultServices,
    gallery: defaultGallery,
    shop: defaultShop,
    inquiries: [
      {
        id: "inq-1",
        name: "Rahul Verma",
        phone: "+91 9876543210",
        service: "Coat-Pant Suit",
        date: "2026-09-25",
        status: "Contacted",
        notes: "Raymond fabric requirement for brother's wedding"
      },
      {
        id: "inq-2",
        name: "Amit Kumar",
        phone: "+91 9812345678",
        service: "Royal Sherwani",
        date: "2026-09-27",
        status: "New",
        notes: "Groom sherwani fitting needed by next month"
      }
    ],
    updatedAt: new Date().toISOString()
  };
}

function readData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const raw = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error reading live content:', e);
  }
  const initial = getInitialData();
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(initial, null, 2), 'utf8');
  } catch (err) {
    // ignore in read-only environment
  }
  return initial;
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  // Check auth
  const token = request.cookies.get('classic_admin_session')?.value;
  const user = token ? verifyToken(token) : null;
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized. Super Admin login required.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const currentData = readData();
    
    const updatedData = {
      ...currentData,
      ...body,
      updatedAt: new Date().toISOString()
    };

    fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2), 'utf8');

    return NextResponse.json({
      success: true,
      message: 'Content updated successfully and saved to live server.',
      data: updatedData
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to save data' },
      { status: 500 }
    );
  }
}
