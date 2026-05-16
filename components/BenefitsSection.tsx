'use client';

import FeatureCard from './FeatureCard';
import SectionHeader from './SectionHeader';
import { IoTrendingUp, IoFlash, IoTime, IoHappy, IoBarChart, IoFitness } from 'react-icons/io5';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <IoTrendingUp className="w-6 h-6" />,
      title: 'Improved Organization',
      description: 'Keep all academic work organized in a single, intuitive platform',
    },
    {
      icon: <IoFlash className="w-6 h-6" />,
      title: 'Higher Productivity',
      description: 'Save time and focus on learning with automated task management',
    },
    {
      icon: <IoTime className="w-6 h-6" />,
      title: 'Better Time Management',
      description: 'Plan your study schedule and manage time across all subjects',
    },
    {
      icon: <IoHappy className="w-6 h-6" />,
      title: 'Reduced Stress',
      description:
        'Never worry about missing deadlines or forgotten assignments',
    },
    {
      icon: <IoBarChart className="w-6 h-6" />,
      title: 'Clear Progress Tracking',
      description: 'Monitor your academic growth with detailed analytics',
    },
    {
      icon: <IoFitness className="w-6 h-6" />,
      title: 'Structured Learning',
      description: 'Follow a proven system designed for academic success',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Why Students Choose StudentSphere"
          subtitle="Real benefits that lead to real academic improvement"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
