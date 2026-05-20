import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, email, password, studentId, academicLevel } = await request.json();

    if (!name || !email || !password || !studentId) {
      return NextResponse.json(
        { error: 'Name, email, password, and studentId are required' },
        { status: 400 }
      );
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    const newStudent = new Student({
      name,
      email,
      password,
      studentId,
      academicLevel: academicLevel || 'Freshman',
      enrollmentDate: new Date().toISOString().split('T')[0],
    });

    await newStudent.save();

    return NextResponse.json(
      {
        student: {
          _id: newStudent._id,
          name: newStudent.name,
          email: newStudent.email,
          studentId: newStudent.studentId,
          academicLevel: newStudent.academicLevel,
          enrollmentDate: newStudent.enrollmentDate,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
  }
}
