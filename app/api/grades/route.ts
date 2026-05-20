import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Grade } from '@/models/index';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 400 });
    }

    const records = await Grade.find({ studentId });
    return NextResponse.json({ records }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch grades' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { studentId, subject, assignment, marksObtained, totalMarks } = await request.json();

    if (!studentId || !subject || !assignment || marksObtained === undefined) {
      return NextResponse.json(
        { error: 'studentId, subject, assignment, and marksObtained are required' },
        { status: 400 }
      );
    }

    const newRecord = new Grade({
      studentId,
      subject,
      assignment,
      marksObtained,
      totalMarks: totalMarks || 100,
    });

    await newRecord.save();
    return NextResponse.json({ record: newRecord }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create grade record' }, { status: 500 });
  }
}
