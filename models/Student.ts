import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  studentId: string;
  academicLevel: string;
  enrollmentDate: string;
  major: string;
  gpa: number;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    academicLevel: { type: String, default: 'Freshman' },
    enrollmentDate: { type: String, default: new Date().toISOString().split('T')[0] },
    major: { type: String, default: 'Computer Science' },
    gpa: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Student || mongoose.model<IStudent>('Student', studentSchema);
