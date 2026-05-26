'use client';

import { useIntersectionReveal } from './useIntersectionReveal';
import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import StepCard from './StepCard';

export default function HowItWorks() {
  const { ref, isRevealed } = useIntersectionReveal<HTMLDivElement>();

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
    <SectionContainer id="how-it-works">
      <SectionHeader
        title="Get Started in Minutes"
        subtitle="Simple, intuitive onboarding process designed for students"
      />

      {/* Steps */}
      <div
        ref={ref}
        className={`grid md:grid-cols-4 gap-8 ${
          isRevealed ? 'animate-fade-in-up' : 'opacity-0'
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
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-linear-to-r from-blue-300 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
