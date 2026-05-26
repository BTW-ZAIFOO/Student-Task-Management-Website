import mongoose, { Schema, Document } from 'mongoose';

export interface ISubject extends Document {
  _id: mongoose.Types.ObjectId;
  studentId: string;
  name: string;
  code: string;
  instructor: string;
  credits: number;
  createdAt: Date;
}

const subjectSchema = new Schema(
  {
    studentId: { type: String, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    instructor: { type: String, required: true },
    credits: { type: Number, default: 3 },
  },
  { timestamps: true }
);

export default mongoose.models.Subject || mongoose.model<ISubject>('Subject', subjectSchema);
