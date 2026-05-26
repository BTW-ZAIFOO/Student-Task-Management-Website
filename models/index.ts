import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  _id: mongoose.Types.ObjectId;
  studentId: string;
  date: string;
  subject: string;
  status: 'present' | 'absent' | 'late';
  createdAt: Date;
}

const attendanceSchema = new Schema(
  {
    studentId: { type: String, required: true },
    date: { type: String, required: true },
    subject: { type: String, required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], default: 'present' },
  },
  { timestamps: true }
);

export const Attendance = mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', attendanceSchema);

export interface IGrade extends Document {
  _id: mongoose.Types.ObjectId;
  studentId: string;
  subject: string;
  assignment: string;
  marksObtained: number;
  totalMarks: number;
  createdAt: Date;
}

const gradeSchema = new Schema(
  {
    studentId: { type: String, required: true },
    subject: { type: String, required: true },
    assignment: { type: String, required: true },
    marksObtained: { type: Number, required: true },
    totalMarks: { type: Number, default: 100 },
  },
  { timestamps: true }
);

export const Grade = mongoose.models.Grade || mongoose.model<IGrade>('Grade', gradeSchema);

export interface INote extends Document {
  _id: mongoose.Types.ObjectId;
  studentId: string;
  subject: string;
  title: string;
  content: string;
  createdAt: Date;
}

const noteSchema = new Schema(
  {
    studentId: { type: String, required: true },
    subject: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Note = mongoose.models.Note || mongoose.model<INote>('Note', noteSchema);
