import SectionHeader from '../../components/SectionHeader';
import PageLayout from '../../components/PageLayout';
import { IoStar } from 'react-icons/io5';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      level: 'University - BS Computer Science',
      quote: 'StudentSphere has been a game-changer for my studies. I went from managing spreadsheets to having everything organized in one place. My GPA improved by 0.8 points!',
      initials: 'SA',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      level: 'High School - Class 12',
      quote: 'The deadline reminders and subject organization features help me stay on track. I no longer miss assignments, and my stress levels have dropped significantly.',
      initials: 'MJ',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      level: 'College - BS Engineering',
      quote: 'As someone juggling 5 subjects and 2 projects simultaneously, StudentSphere keeps me sane. The analytics dashboard shows me exactly where to focus my efforts.',
      initials: 'PP',
      rating: 5,
    },
    {
      name: 'James Chen',
      level: 'University - MS Data Science',
      quote: 'I recommended StudentSphere to my entire study group. We use it to coordinate assignments and track progress together. It\'s saved us hours of time!',
      initials: 'JC',
      rating: 5,
    },
    {
      name: 'Amara Okonkwo',
      level: 'Secondary School - Class 10',
      quote: 'I love how simple it is to use, but it\'s also powerful when I need advanced features. StudentSphere made exam prep so much easier.',
      initials: 'AO',
      rating: 5,
    },
    {
      name: 'David Kim',
      level: 'College - BS Medicine',
      quote: 'Between lectures, labs, and clinical rotations, I have almost no free time. StudentSphere handles all my organization so I can focus on learning medicine.',
      initials: 'DK',
      rating: 5,
    },
  ];

  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="Loved by Students Worldwide"
            subtitle="See what thousands of students are saying about StudentSphere"
          />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-smooth border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <IoStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-smooth"
          >
            Join Our Community
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
