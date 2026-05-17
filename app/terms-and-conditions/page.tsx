import PageLayout from '../../components/PageLayout';

export default function Terms() {
  return (
    <PageLayout>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mt-4">Please read these terms carefully before using StudentSphere.</p>

          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <h4 className="font-semibold">User Agreement</h4>
            <p>By using the service you agree to comply with the terms and restrictions.</p>
            <h4 className="font-semibold">Payments</h4>
            <p>Payment terms for paid plans are defined on the pricing page.</p>
            <h4 className="font-semibold">Intellectual Property</h4>
            <p>All software and trademarks belong to StudentSphere.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
