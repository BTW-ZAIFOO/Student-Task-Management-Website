'use client';

import { useIntersectionReveal } from './useIntersectionReveal';

export default function FinalCTA() {
  const { ref, isRevealed } = useIntersectionReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`max-w-4xl mx-auto text-center relative z-10 ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
          Start Your Structured Academic Journey Today
        </h2>

        <p className="text-xl text-blue-100 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Join students from all academic levels who are managing their studies
          smarter with StudentSphere.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-smooth hover:scale-105 active:scale-95 hover:animate-wiggle">
            Start Free Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-smooth hover:scale-105 active:scale-95 hover:animate-wiggle">
            Explore Features
          </button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center hover:scale-110 transition-smooth">
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-blue-100">Active Students</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="text-center hover:scale-110 transition-smooth">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-blue-100">Satisfaction Rate</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden sm:block" />
          <div className="text-center hover:scale-110 transition-smooth">
            <p className="text-3xl font-bold">6+</p>
            <p className="text-sm text-blue-100">Academic Levels</p>
          </div>
        </div>
      </div>
    </section>
  );
}
