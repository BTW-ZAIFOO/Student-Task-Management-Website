import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Task from '@/models/Task';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json({ error: 'studentId is required' }, { status: 400 });
    }

    const tasks = await Task.find({ studentId });
    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { studentId, title, description, dueDate, priority, status } = await request.json();

    if (!studentId || !title || !dueDate) {
      return NextResponse.json(
        { error: 'studentId, title, and dueDate are required' },
        { status: 400 }
      );
    }

    const newTask = new Task({
      studentId,
      title,
      description,
      dueDate,
      priority: priority || 'medium',
      status: status || 'pending',
    });

    await newTask.save();
    return NextResponse.json({ task: newTask }, { status: 201 });
  } catch (error) {
    console.error('Task creation error:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
