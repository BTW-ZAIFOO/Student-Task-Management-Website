import mongoose, { Schema, Document } from 'mongoose';

export interface IExam extends Document {
  _id: string;
  studentId: string;
  title: string;
  subject: string;
  date: string;
  time: string;
  room: string;
  createdAt: Date;
}

const examSchema = new Schema(
  {
    studentId: { type: String, required: true },
    title: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    room: { type: String, default: 'TBD' },
  },
  { timestamps: true }
);

export default mongoose.models.Exam || mongoose.model<IExam>('Exam', examSchema);
