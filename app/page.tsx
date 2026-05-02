import AnimationInit from "@/components/AnimationInit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeBring from "@/components/WhatWeBring";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CaseStudies from "@/components/CaseStudies";
import OemCtv from "@/components/OemCtv";
import UGC from "@/components/UGC";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <AnimationInit />
      <Navbar />
      <main className="w-full">
        <Hero />
        <Problem />
        <WhatWeBring />
        <Services />
        <WhyUs />
        <CaseStudies />
        <OemCtv />
        <UGC />
        <Clients />
        <Team />
        <Contact />
      </main>
    </>
  );
}
