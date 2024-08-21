import AccordingSection from "@/components/according";
import CTASection from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import NavBar from "@/components/navbar";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <div className="absolute flex h-screen w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>
      <NavBar />
      <Hero />
      <HowItWorks />
      <TestimonialsSection />
      <AccordingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
