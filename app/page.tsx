import Expertise from "@/component/landing-sections/Expertise";
import Hero from "@/component/landing-sections/Hero";
import Impact from "@/component/landing-sections/Impact";
import WhyChooseUs from "@/component/landing-sections/WhyChooseUs";
import FounderMessage from "@/component/landing-sections/FounderMessage";
import Projects from "@/component/landing-sections/Projects";
import CTA from "@/component/landing-sections/CTA";
import FAQSection from "@/component/landing-sections/FAQSection";
import BlogSection from "@/component/landing-sections/BlogSection";

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
