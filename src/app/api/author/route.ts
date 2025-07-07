import { NextResponse } from 'next/server';
import { authorData } from '@/components/AboutUs';

export async function GET() {
  try {
    return NextResponse.json(authorData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch author data' },
      { status: 500 }
    );
  }
}
