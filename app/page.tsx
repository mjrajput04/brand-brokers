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
import Roster from "@/components/Roster";
import OurProducts from "@/components/OurProducts";
import Clients from "@/components/Clients";
import WorkShowcase from "@/components/WorkShowcase";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

// The DB-driven sections read from MongoDB per request, so the homepage must be
// dynamic — this makes admin edits show on the live site immediately (even in a
// production build), instead of being frozen at build time.
export const dynamic = "force-dynamic";

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
        <OurProducts />
        <Roster />
        <Clients />
        <WorkShowcase />
        <Testimonials />
        <Team />
        <Contact />
      </main>
    </>
  );
}
