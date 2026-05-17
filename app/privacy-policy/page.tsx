import PageLayout from '../../components/PageLayout';

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-4">This privacy policy explains how StudentSphere collects and uses data.</p>

          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <h4 className="font-semibold">Data Collection</h4>
            <p>We collect account information, usage data, and preferences to operate the service.</p>
            <h4 className="font-semibold">Cookies</h4>
            <p>We use cookies for session and analytics; you may opt out via browser settings.</p>
            <h4 className="font-semibold">Security</h4>
            <p>We use industry-standard measures to protect user data.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
