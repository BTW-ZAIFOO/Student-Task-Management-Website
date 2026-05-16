'use client';

import { useEffect, useRef, useState } from 'react';

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
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl border border-red-100 bg-red-50/50 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
    >
      <div className="inline-flex p-2 bg-red-100 rounded-lg mb-3">
        <div className="text-red-600 text-xl">{icon}</div>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
