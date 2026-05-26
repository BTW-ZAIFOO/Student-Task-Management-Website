'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ProblemCard({
  icon,
  title,
  description,
  index = 0,
}: ProblemCardProps) {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl border border-red-100 bg-red-50/50 ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isRevealed ? `${index * 50}ms` : '0ms' }}
    >
      <div className="inline-flex p-2 bg-red-100 rounded-lg mb-3">
        <div className="text-red-600 text-xl">{icon}</div>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
