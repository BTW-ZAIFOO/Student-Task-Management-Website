'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-smooth hover:border-blue-200 hover:scale-105 ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isRevealed ? `${index * 50}ms` : '0ms' }}
    >
      <div className="mb-4 inline-flex p-3 bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-smooth">
        <div className="text-blue-600 text-2xl">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
