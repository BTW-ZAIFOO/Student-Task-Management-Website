import Link from 'next/link';
import PageLayout from '../../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
          <p className="text-sm text-gray-600 mt-4">We couldn't find the page you were looking for.</p>
          <div className="mt-6">
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Return Home</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
