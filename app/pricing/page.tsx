import PageLayout from '../../components/PageLayout';
import SectionHeader from '../../components/SectionHeader';
import { IoCheckmark } from 'react-icons/io5';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      cta: 'Start Free',
      highlighted: false,
      features: [
        { text: 'Up to 3 subjects', included: true },
        { text: 'Basic task tracking', included: true },
        { text: '5 GB storage', included: true },
        { text: 'Limited analytics', included: false },
        { text: 'Advanced features', included: false },
      ],
    },
    {
      name: 'Student Pro',
      price: '$9',
      period: '/month',
      description: 'Most popular for students',
      cta: 'Upgrade Now',
      highlighted: true,
      features: [
        { text: 'Unlimited subjects', included: true },
        { text: 'Full task management', included: true },
        { text: '100 GB storage', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Priority support', included: true },
      ],
    },
    {
      name: 'Institution',
      price: 'Custom',
      period: 'pricing',
      description: 'For schools & organizations',
      cta: 'Contact Sales',
      highlighted: false,
      features: [
        { text: 'Multi-user management', included: true },
        { text: 'School admin controls', included: true },
        { text: 'Unlimited storage', included: true },
        { text: 'Custom analytics', included: true },
        { text: '24/7 dedicated support', included: true },
      ],
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader title="Simple, Transparent Pricing" subtitle="Choose the perfect plan for your academic journey" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl border transition-smooth animate-fade-in-up ${
                plan.highlighted
                  ? 'bg-white shadow-2xl border-blue-400 scale-105'
                  : 'bg-white shadow-lg border-gray-200 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-600 ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-smooth ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                    : 'border-2 border-gray-200 text-gray-900 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {plan.cta}
              </button>

              <div className="mt-8 space-y-3 border-t border-gray-200 pt-8">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-3">
                    <IoCheckmark
                      className={`w-5 h-5 flex-shrink-0 ${feature.included ? 'text-green-600' : 'text-gray-300'}`}
                    />
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-600">All plans include a 30-day free trial. No credit card required.</p>
        </div>
      </section>
    </PageLayout>
  );
}
