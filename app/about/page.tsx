import PageLayout from "../../components/PageLayout";
import SectionHeader from "../../components/SectionHeader";
import { IoRocket, IoBulb, IoHeartCircle, IoTrendingUp } from "react-icons/io5";

export default function About() {
  const values = [
    {
      icon: <IoRocket className="w-6 h-6" />,
      title: "Student-Focused",
      desc: "Built with students, for students. Every feature solves a real academic problem.",
    },
    {
      icon: <IoBulb className="w-6 h-6" />,
      title: "Innovation",
      desc: "We constantly evolve to meet the changing needs of modern education.",
    },
    {
      icon: <IoHeartCircle className="w-6 h-6" />,
      title: "Community",
      desc: "We believe in supporting student communities worldwide.",
    },
    {
      icon: <IoTrendingUp className="w-6 h-6" />,
      title: "Growth",
      desc: "We help students reach their full academic potential.",
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="About StudentSphere"
            subtitle="Empowering students worldwide to succeed academically"
          />
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            StudentSphere was founded with one goal: to help students organize
            their academic lives and unlock their full potential. We believe
            that effective task management and organization are the keys to
            academic success. Our platform combines powerful features with an
            intuitive design, enabling students to focus on what matters
            most—their education.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-white rounded-2xl border border-gray-100 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Story</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2024, StudentSphere emerged from the personal struggles
            of its creators during their academic journeys. Overwhelmed by
            scattered notes, missed deadlines, and endless to-do lists, they set
            out to build a solution that could change how students manage their
            academic responsibilities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What started as a simple task manager has evolved into a
            comprehensive platform used by thousands of students across the
            globe. Our team remains committed to listening to our users and
            continuously improving the platform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, StudentSphere stands as a testament to the power of solving
            real problems for real people. We're not just building
            software—we're shaping the future of student success.
          </p>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth border border-gray-100 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {val.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-sm text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-smooth"
          >
            Join Us Today
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
