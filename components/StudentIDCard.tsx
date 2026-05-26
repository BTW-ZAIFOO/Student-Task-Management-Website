'use client';

import { useState } from 'react';
import { IoDownload } from 'react-icons/io5';

interface StudentIDCardProps {
  studentName: string;
  studentId: string;
  academicLevel: string;
  enrollmentDate: string;
  avatarInitials: string;
  email: string;
  major?: string;
  gpa?: string;
}

export default function StudentIDCard({
  studentName,
  studentId,
  academicLevel,
  enrollmentDate,
  avatarInitials,
  email,
  major = 'Computer Science',
  gpa = '3.8',
}: StudentIDCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 4);

  const handleDownload = () => {
    const element = document.getElementById('student-id-card');
    if (element) {
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(0, 0, 800, 500);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.fillText('StudentSphere', 50, 50);

        ctx.font = 'bold 32px Arial';
        ctx.fillText(studentName, 50, 100);

        ctx.font = '18px Arial';
        ctx.fillStyle = '#e5e7eb';
        ctx.fillText(`ID: ${studentId}`, 50, 150);
        ctx.fillText(`Program: ${academicLevel}`, 50, 180);
        ctx.fillText(`Major: ${major}`, 50, 210);
        ctx.fillText(`Valid: ${enrollmentDate} - ${expiryDate.toLocaleDateString()}`, 50, 240);

        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = `${studentName}-ID-Card.png`;
        link.click();
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="perspective cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          id="student-id-card"
          className={`relative w-full transition-transform duration-500 transform ${
            isFlipped ? 'rotateY-180' : ''
          }`}
          style={{
            aspectRatio: '16 / 10',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front of Card */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #0c4a6e 100%)',
            }}
          >
            <div className="relative h-full p-8 flex flex-col justify-between text-white">
              {/* Top Section - Logo & Hologram Effect */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-2xl font-bold mb-1">StudentSphere</div>
                  <div className="text-xs opacity-75">ACADEMIC ID</div>
                </div>
                {/* Hologram effect simulation */}
                <div className="w-20 h-20 rounded-full opacity-20 bg-linear-to-br from-yellow-300 via-pink-300 to-blue-300 blur-xl"></div>
              </div>

              {/* Middle Section - Student Info */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs opacity-75 mb-1">STUDENT NAME</div>
                  <div className="text-2xl font-bold tracking-wider">{studentName}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs opacity-75 mb-1">ID NUMBER</div>
                    <div className="text-lg font-mono font-bold">{studentId}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75 mb-1">ACADEMIC LEVEL</div>
                    <div className="text-sm font-semibold">{academicLevel}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="opacity-75 mb-0.5">MAJOR</div>
                    <div className="font-semibold">Computer Sci.</div>
                  </div>
                  <div>
                    <div className="opacity-75 mb-0.5">GPA</div>
                    <div className="font-semibold">{gpa}</div>
                  </div>
                  <div>
                    <div className="opacity-75 mb-0.5">ENROLLMENT</div>
                    <div className="font-semibold">{enrollmentDate}</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Security Features */}
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-xs opacity-75">VALID THRU</div>
                  <div className="text-lg font-mono">{expiryDate.toLocaleDateString()}</div>
                </div>

                {/* Security Pattern */}
                <div className="flex gap-1">
                  <div className="w-2 h-8 bg-yellow-300 opacity-60 rounded"></div>
                  <div className="w-2 h-8 bg-cyan-300 opacity-60 rounded"></div>
                  <div className="w-2 h-8 bg-pink-300 opacity-60 rounded"></div>
                  <div className="w-2 h-8 bg-yellow-300 opacity-60 rounded"></div>
                </div>
              </div>
            </div>

            {/* Card Border Security Lines */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-300 via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-40"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-300 via-transparent to-transparent opacity-40"></div>
            </div>
          </div>

          {/* Back of Card */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 100%)',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="relative h-full p-8 flex flex-col justify-between text-white">
              {/* Security Information */}
              <div>
                <div className="text-lg font-bold mb-4">SECURITY INFORMATION</div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="opacity-75 mb-1">SIGNATURE</div>
                    <div className="border-b border-white/30 pb-3 font-signature">
                      {studentName}
                    </div>
                  </div>
                  <div>
                    <div className="opacity-75 mb-1">ISSUED BY</div>
                    <div className="font-semibold">StudentSphere Academic Authority</div>
                  </div>
                </div>
              </div>

              {/* QR Code Placeholder & Barcode */}
              <div className="flex items-end justify-between">
                {/* QR Code Placeholder */}
                <div className="w-24 h-24 bg-white/20 rounded border-2 border-white/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-mono opacity-60">QR CODE</div>
                    <div className="grid grid-cols-3 gap-0.5 mt-1">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-white/50 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Barcode Placeholder */}
                <div className="space-y-1">
                  <div className="h-8 bg-white/20 rounded flex items-center justify-center px-2">
                    <div className="text-xs font-mono opacity-60">{studentId}</div>
                  </div>
                  <div className="flex gap-0.5 justify-end">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/50"
                        style={{ height: Math.random() * 12 + 8 + 'px' }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs opacity-60 text-center">
                <div>This is an official StudentSphere academic identification card.</div>
                <div>Unauthorized reproduction is prohibited.</div>
              </div>
            </div>

            {/* Back Card Border */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Click to Flip Hint */}
      <div className="text-center mt-4 text-gray-600 text-sm">
        Click to flip card
      </div>

      {/* Download Button */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <IoDownload className="w-5 h-5" />
          Download ID Card
        </button>
      </div>
    </div>
  );
}
