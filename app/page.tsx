import BlogSection from "@/components/landing-sections/BlogSection";
import CTA from "@/components/landing-sections/CTA";
import Expertise from "@/components/landing-sections/Expertise";
import FAQSection from "@/components/landing-sections/FAQSection";
import FounderMessage from "@/components/landing-sections/FounderMessage";
import Hero from "@/components/landing-sections/Hero";
import Impact from "@/components/landing-sections/Impact";
import Projects from "@/components/landing-sections/Projects";
import WhyChooseUs from "@/components/landing-sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Impact />
      <Expertise />
      <WhyChooseUs />
      <FounderMessage />
      <Projects />
      <CTA />
      <FAQSection />
      <BlogSection />
    </main>
  );
}
