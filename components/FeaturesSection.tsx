'use client';

import FeatureCard from './FeatureCard';
import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import { IoCheckmarkCircle, IoBook, IoCalendar, IoPerson, IoDocuments, IoBarChart, IoNotifications, IoFitness } from 'react-icons/io5';

export default function FeaturesSection() {
  const features = [
    {
      icon: <IoCheckmarkCircle className="w-6 h-6" />,
      title: 'Smart Task & Assignment Manager',
      description:
        'Create, organize, and track assignments with intelligent deadline reminders',
    },
    {
      icon: <IoBook className="w-6 h-6" />,
      title: 'Subject Organization System',
      description:
        'Organize all subjects in one place with structured curriculum tracking',
    },
    {
      icon: <IoCalendar className="w-6 h-6" />,
      title: 'Exam & Schedule Planner',
      description:
        'Plan exams, manage schedules, and never miss important dates',
    },
    {
      icon: <IoPerson className="w-6 h-6" />,
      title: 'Attendance Tracking System',
      description: 'Monitor attendance across all subjects automatically',
    },
    {
      icon: <IoDocuments className="w-6 h-6" />,
      title: 'Notes & File Management',
      description: 'Store and organize all your notes and study materials securely',
    },
    {
      icon: <IoBarChart className="w-6 h-6" />,
      title: 'Academic Progress Analytics',
      description: 'Track grades, performance trends, and academic growth over time',
    },
    {
      icon: <IoNotifications className="w-6 h-6" />,
      title: 'Deadline Reminders System',
      description:
        'Smart notifications ensure you never miss an assignment or exam',
    },
    {
      icon: <IoFitness className="w-6 h-6" />,
      title: 'Productivity Dashboard',
      description:
        'Visual overview of all your academic activities and progress',
    },
  ];

  return (
    <SectionContainer id="features">
        <SectionHeader
          title="Everything You Need to Stay Academically Organized"
          subtitle="Comprehensive tools designed for academic success at every level"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
    </SectionContainer>
  );
}
