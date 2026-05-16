'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import StepCard from './StepCard';

export default function HowItWorks() {
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

  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description: 'Sign up in seconds with your email or preferred authentication',
    },
    {
      number: 2,
      title: 'Select Academic Level',
      description: 'Choose your current academic level to personalize your experience',
    },
    {
      number: 3,
      title: 'Add Subjects & Preferences',
      description: 'Add your subjects and customize your academic preferences',
    },
    {
      number: 4,
      title: 'Start Managing',
      description: 'Begin organizing your tasks, exams, notes, and progress',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Get Started in Minutes"
          subtitle="Simple, intuitive onboarding process designed for students"
        />

        {/* Steps */}
        <div
          ref={ref}
          className={`grid md:grid-cols-4 gap-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />

              {/* Connecting Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
