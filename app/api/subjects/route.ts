import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subject from '@/models/Subject';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 400 });
    }

    const subjects = await Subject.find({ studentId });
    return NextResponse.json({ subjects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { studentId, name, code, instructor, credits } = await request.json();

    if (!studentId || !name || !code || !instructor) {
      return NextResponse.json(
        { error: 'studentId, name, code, and instructor are required' },
        { status: 400 }
      );
    }

    const newSubject = new Subject({
      studentId,
      name,
      code,
      instructor,
      credits: credits || 3,
    });

    await newSubject.save();
    return NextResponse.json({ subject: newSubject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create subject' }, { status: 500 });
  }
}
