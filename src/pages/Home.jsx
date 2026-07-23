import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import AboutSection from "../components/home/AboutSection";
import PillarsSection from "../components/home/PillarsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <StatsSection />
      <AboutSection />
      <PillarsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}