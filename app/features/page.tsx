import SectionHeader from '../../components/SectionHeader';
import PageLayout from '../../components/PageLayout';
import {
  IoCheckmarkCircle,
  IoBook,
  IoCalendar,
  IoPerson,
  IoDocuments,
  IoBarChart,
  IoNotifications,
  IoFitness,
} from 'react-icons/io5';

export default function FeaturesPage() {
  const features = [
    {
      icon: <IoCheckmarkCircle className="w-6 h-6" />,
      title: 'Smart Task & Assignment Manager',
      description: 'Create, organize, and track assignments with intelligent deadline reminders.',
    },
    {
      icon: <IoBook className="w-6 h-6" />,
      title: 'Subject Organization System',
      description: 'Organize all subjects in one place with structured curriculum tracking.',
    },
    {
      icon: <IoCalendar className="w-6 h-6" />,
      title: 'Exam & Schedule Planner',
      description: 'Plan exams, manage schedules, and never miss important dates.',
    },
    {
      icon: <IoPerson className="w-6 h-6" />,
      title: 'Attendance Tracking System',
      description: 'Monitor attendance across all subjects automatically.',
    },
    {
      icon: <IoDocuments className="w-6 h-6" />,
      title: 'Notes & File Management',
      description: 'Store and organize all your notes and study materials securely.',
    },
    {
      icon: <IoBarChart className="w-6 h-6" />,
      title: 'Academic Progress Analytics',
      description: 'Track grades, performance trends, and academic growth over time.',
    },
    {
      icon: <IoNotifications className="w-6 h-6" />,
      title: 'Deadline Reminders System',
      description: 'Smart notifications ensure you never miss an assignment or exam.',
    },
    {
      icon: <IoFitness className="w-6 h-6" />,
      title: 'Productivity Dashboard',
      description: 'Visual overview of all your academic activities and progress.',
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="Powerful Features Built for Academic Success"
            subtitle="Everything students need to stay organized, productive, and academically focused."
          />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth border border-gray-100 hover:border-blue-200 animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-smooth"
          >
            Start Using StudentSphere
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
