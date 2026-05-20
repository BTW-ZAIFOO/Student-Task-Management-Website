import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const student = await Student.findOne({ email });
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    if (student.password !== password) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    return NextResponse.json(
      {
        student: {
          _id: student._id,
          name: student.name,
          email: student.email,
          studentId: student.studentId,
          academicLevel: student.academicLevel,
          major: student.major,
          gpa: student.gpa,
          enrollmentDate: student.enrollmentDate,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
