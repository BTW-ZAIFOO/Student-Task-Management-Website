'use client';

import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'StudentSphere completely transformed how I manage my studies. I went from scattered notes across three apps to everything in one place. My grades improved dramatically!',
      author: 'Aisha Khan',
      level: 'College - Class 12',
    },
    {
      quote:
        'As a university student juggling multiple subjects, this platform saved me. I never miss deadlines anymore and I can actually see my progress. Highly recommend!',
      author: 'Ravi Patel',
      level: 'University - BS',
    },
    {
      quote:
        'The attendance tracking and exam planning features are lifesavers. StudentSphere made academic management stress-free. Worth every moment of my day!',
      author: 'Maria Santos',
      level: 'Higher Secondary - Class 10',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="What Students Say About StudentSphere"
          subtitle="Real feedback from students achieving real academic success"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              level={testimonial.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
