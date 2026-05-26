'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

interface AcademicLevelProps {
  level: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

export default function AcademicLevelCard({
  level,
  description,
  icon,
  index = 0,
}: AcademicLevelProps) {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-linear-to-br from-blue-50/50 to-indigo-50/50 hover:shadow-lg transition-smooth group ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isRevealed ? `${index * 50}ms` : '0ms' }}
    >
      <div className="mb-3 p-3 bg-white rounded-lg group-hover:bg-blue-50 transition-smooth">
        <div className="text-2xl text-blue-600">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{level}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
