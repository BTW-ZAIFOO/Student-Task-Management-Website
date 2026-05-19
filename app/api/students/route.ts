import { NextRequest, NextResponse } from 'next/server';

// Mock data storage
const students: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, academicLevel } = await request.json();

    // Check if student already exists
    const existing = students.find((s) => s.email === email);
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    const student = {
      id: 'STU-' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      academicLevel,
      enrollDate: new Date().toISOString(),
    };

    students.push(student);
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}

