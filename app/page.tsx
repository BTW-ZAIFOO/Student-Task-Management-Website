import NavbarPro from '@/components/NavbarPro';
import HeroSection from '@/components/HeroSection';
import ProblemStatement from '@/components/ProblemStatement';
import SolutionOverview from '@/components/SolutionOverview';
import FeaturesSection from '@/components/FeaturesSection';
import AcademicLevelsSection from '@/components/AcademicLevelsSection';
import HowItWorks from '@/components/HowItWorks';
import DashboardPreview from '@/components/DashboardPreview';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavbarPro />
      <main className="pt-20">
        <HeroSection />
        <ProblemStatement />
        <SolutionOverview />
        <FeaturesSection />
        <AcademicLevelsSection />
        <HowItWorks />
        <DashboardPreview />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
