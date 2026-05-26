import { NextRequest, NextResponse } from 'next/server';

// Mock data storage for demo
const students: any = {};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    // Mock student data
    const student = {
      id: params.id,
      name: 'Sample Student',
      email: 'student@example.com',
      academicLevel: 'University',
      tasks: [],
      subjects: [],
      exams: [],
      attendance: [],
      grades: [],
    };

    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch student' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const data = await request.json();
    const student = { id: params.id, ...data };
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update student' }, { status: 500 });
  }
}

