import SectionHeader from '../../components/SectionHeader';
import PageLayout from '../../components/PageLayout';

export default function AcademicLevels() {
  const levels = [
    { title: 'Primary', range: 'Class 1–5' },
    { title: 'Secondary', range: 'Class 6–8' },
    { title: 'Higher Secondary', range: 'Class 9–10' },
    { title: 'College', range: 'Class 11–12' },
    { title: 'University', range: 'BS / MS / MPhil' },
    { title: 'Doctorate', range: 'PhD' },
  ];

  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Designed for Every Academic Stage" subtitle="From primary school to doctoral research — tailored workflows for every student" />
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div key={lvl.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth">
              <h4 className="text-lg font-semibold">{lvl.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{lvl.range}</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>Recommended workflow</li>
                <li>Supported tracking</li>
                <li>Example subjects</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
