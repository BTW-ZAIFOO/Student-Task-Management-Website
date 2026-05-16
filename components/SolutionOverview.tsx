'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

export default function SolutionOverview() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="A Unified System for Academic Success"
          subtitle="StudentSphere transforms scattered chaos into organized, manageable structure."
        />

        {/* Comparison Table */}
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Before</h3>
              <div className="space-y-4">
                {[
                  'Disorganized study materials',
                  'Missed assignment deadlines',
                  'No progress tracking',
                  'Multiple tools & platforms',
                  'Stressed & overwhelmed',
                  'Declining academic performance',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">After</h3>
              <div className="space-y-4">
                {[
                  'Centralized academic dashboard',
                  'Never miss deadlines again',
                  'Real-time progress analytics',
                  'All-in-one unified platform',
                  'Confident & in control',
                  'Improved academic performance',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
