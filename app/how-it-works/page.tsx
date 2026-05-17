import SectionHeader from '../../components/SectionHeader';
import PageLayout from '../../components/PageLayout';

export default function HowItWorks() {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="How StudentSphere Works" subtitle="A simple workflow to get you organized fast" />
        </div>

        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3 space-y-6">
            <div className="p-6 bg-white rounded-xl shadow"> 
              <h4 className="font-semibold">Step 1 — Create Account</h4>
              <p className="text-sm text-gray-600 mt-2">Sign up and choose your academic level.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow"> 
              <h4 className="font-semibold">Step 2 — Add Subjects</h4>
              <p className="text-sm text-gray-600 mt-2">Add subjects to begin organizing your curriculum.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow"> 
              <h4 className="font-semibold">Step 3 — Track Assignments & Exams</h4>
              <p className="text-sm text-gray-600 mt-2">Create tasks, set deadlines and sync to calendar.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow"> 
              <h4 className="font-semibold">Step 4 — Monitor Progress</h4>
              <p className="text-sm text-gray-600 mt-2">Use analytics to understand and improve performance.</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-inner">
              <h5 className="text-sm font-semibold">Timeline</h5>
              <ol className="mt-4 space-y-3 text-sm text-gray-600">
                <li>Account setup → Profile → Academic Level</li>
                <li>Add subjects → Import resources</li>
                <li>Schedule tasks → Sync calendar</li>
                <li>Review analytics → Improve study plan</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">
          <a href="/signup" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-smooth">
            Get Started In Minutes
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
