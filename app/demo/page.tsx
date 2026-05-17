import PageLayout from '../../components/PageLayout';

export default function DemoPage() {
  return (
    <PageLayout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Live Demo</h1>
          <p className="text-sm text-gray-600 mt-2">Try a lightweight interactive preview of StudentSphere.</p>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            {/* Minimal interactive actions (mock) */}
            <p className="text-sm text-gray-600">Add a task, add subjects, and explore analytics in this demo.</p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Add Task (mock)</button>
              <button className="px-4 py-2 border rounded">Add Subject (mock)</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
