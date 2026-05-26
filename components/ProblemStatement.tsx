'use client';

import ProblemCard from './ProblemCard';
import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import { IoWarning, IoClose, IoAlertCircle, IoTime, IoBarChart, IoHourglass } from 'react-icons/io5';

export default function ProblemStatement() {
  const problems = [
    {
      icon: <IoClose className="w-6 h-6" />,
      title: 'Missed Deadlines',
      description:
        'Assignments and deadlines scattered across multiple platforms',
    },
    {
      icon: <IoBarChart className="w-6 h-6" />,
      title: 'Scattered Materials',
      description:
        'Study materials, notes, and files disorganized and hard to find',
    },
    {
      icon: <IoAlertCircle className="w-6 h-6" />,
      title: 'No Tracking System',
      description:
        'No centralized way to track assignments, exams, and progress',
    },
    {
      icon: <IoWarning className="w-6 h-6" />,
      title: 'Poor Planning',
      description:
        'Exam preparation and study planning without proper structure',
    },
    {
      icon: <IoTime className="w-6 h-6" />,
      title: 'Lack of Visibility',
      description:
        'No clear view of academic progress and performance trends',
    },
    {
      icon: <IoHourglass className="w-6 h-6" />,
      title: 'Time Management',
      description: 'Difficulty balancing multiple subjects and commitments',
    },
  ];

  return (
    <SectionContainer id="problems">
        <SectionHeader
          title="The Problem Every Student Faces"
          subtitle="Academic life shouldn't mean managing chaos. We understand the pain points."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </div>
    </SectionContainer>
  );
}
