'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

interface StepProps {
  number: number;
  title: string;
  description: string;
  index?: number;
}

export default function StepCard({ number, title, description, index = 0 }: StepProps) {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isRevealed ? `${index * 100}ms` : '0ms' }}
    >
      <div className="mb-4 flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-600 text-white rounded-full font-bold text-xl shadow-lg">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm max-w-xs">{description}</p>
    </div>
  );
}
