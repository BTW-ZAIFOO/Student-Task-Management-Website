import PageLayout from '../../components/PageLayout';
import DashboardPreview from '../../components/DashboardPreview';

export default function DashboardPreviewPage() {
  return (
    <PageLayout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard Preview</h1>
          <p className="text-sm text-gray-600 mt-2">A realistic snapshot of the StudentSphere workspace.</p>

          <div className="mt-8">
            <DashboardPreview />
          </div>

          <div className="mt-8 text-center">
            <a href="/signup" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">Create Your Workspace</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
