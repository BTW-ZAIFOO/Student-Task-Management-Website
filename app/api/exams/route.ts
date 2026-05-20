import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Exam from '@/models/Exam';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 400 });
    }

    const exams = await Exam.find({ studentId });
    return NextResponse.json({ exams }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch exams' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { studentId, title, subject, date, time, room } = await request.json();

    if (!studentId || !title || !subject || !date || !time) {
      return NextResponse.json(
        { error: 'studentId, title, subject, date, and time are required' },
        { status: 400 }
      );
    }

    const newExam = new Exam({
      studentId,
      title,
      subject,
      date,
      time,
      room: room || 'TBD',
    });

    await newExam.save();
    return NextResponse.json({ exam: newExam }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create exam' }, { status: 500 });
  }
}
