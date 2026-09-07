import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActions from "@/components/FloatingActions";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Founder from "@/sections/Founder";
import Services from "@/sections/Services";
import Course from "@/sections/Course";
import WhyChoose from "@/sections/WhyChoose";
import Demat from "@/sections/Demat";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Founder />
        <Services />
        <Course />
        <WhyChoose />
        <Demat />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
