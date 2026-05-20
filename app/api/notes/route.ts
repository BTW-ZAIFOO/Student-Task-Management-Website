import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Note } from '@/models/index';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 400 });
    }

    const notes = await Note.find({ studentId });
    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { studentId, subject, title, content } = await request.json();

    if (!studentId || !subject || !title || !content) {
      return NextResponse.json(
        { error: 'studentId, subject, title, and content are required' },
        { status: 400 }
      );
    }

    const newNote = new Note({
      studentId,
      subject,
      title,
      content,
    });

    await newNote.save();
    return NextResponse.json({ note: newNote }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 });
  }
}
