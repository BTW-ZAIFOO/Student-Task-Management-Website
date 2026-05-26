'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''} ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
