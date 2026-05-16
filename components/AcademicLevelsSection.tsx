'use client';

import AcademicLevelCard from './AcademicLevelCard';
import SectionHeader from './SectionHeader';
import {
  IoPerson,
  IoPeople,
  IoSchool,
  IoPersonCircle,
  IoReaderOutline,
  IoFlask
} from 'react-icons/io5';

export default function AcademicLevelsSection() {
  const levels = [
  {
    level: 'Primary',
    description: 'Class 1 to 5',
    icon: <IoPerson className="w-7 h-7" />,
  },
  {
    level: 'Secondary',
    description: 'Class 6 to 8',
    icon: <IoPeople className="w-7 h-7" />,
  },
  {
    level: 'Higher Secondary',
    description: 'Class 9 to 10',
    icon: <IoSchool className="w-7 h-7" />,
  },
  {
    level: 'College',
    description: 'Class 11 to 12',
    icon: <IoPersonCircle className="w-7 h-7" />,
  },
  {
    level: 'University',
    description: 'BS / MS / MPhil',
    icon: <IoReaderOutline className="w-7 h-7" />,
  },
  {
    level: 'Doctorate',
    description: 'PhD & Research',
    icon: <IoFlask className="w-7 h-7" />,
  },
];

  return (
    <section id="levels" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Built for Every Academic Level"
          subtitle="From primary school to doctoral research, StudentSphere adapts to your journey"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <AcademicLevelCard
              key={index}
              level={level.level}
              description={level.description}
              icon={level.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
