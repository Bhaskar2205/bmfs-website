import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Founder from "@/sections/Founder";
import Services from "@/sections/Services";
import Course from "@/sections/Course";
import WhyChoose from "@/sections/WhyChoose";
import Demat from "@/sections/Demat";
import Footer from "@/components/Footer";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Founder />
      <Services />
      <Course />
      <WhyChoose />
      <Demat />
      <Team />
      <Footer />
    </>
  );
}