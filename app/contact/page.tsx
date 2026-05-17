import PageLayout from '../../components/PageLayout';
import SectionHeader from '../../components/SectionHeader';
import ContactForm from '../../components/ContactForm';
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';

export default function Contact() {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Get In Touch"
            subtitle="We're here to help. Reach out for support, feedback, or business inquiries."
          />
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth">
              <IoMail className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Email Support</h4>
              <p className="text-sm text-gray-600 mt-2">support@studentsphere.com</p>
              <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth">
              <IoCall className="w-6 h-6 text-indigo-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-sm text-gray-600 mt-2">+1 (555) 123-4567</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth">
              <IoLocationSharp className="w-6 h-6 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Office</h4>
              <p className="text-sm text-gray-600 mt-2">San Francisco, CA</p>
              <p className="text-xs text-gray-500 mt-1">HQ & Support Center</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
