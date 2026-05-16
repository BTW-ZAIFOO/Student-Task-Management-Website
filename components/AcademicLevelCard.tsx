'use client';

import { useEffect, useRef, useState } from 'react';

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
      className={`flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 hover:shadow-lg transition-smooth group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
    >
      <div className="mb-3 p-3 bg-white rounded-lg group-hover:bg-blue-50 transition-smooth">
        <div className="text-2xl text-blue-600">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{level}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
