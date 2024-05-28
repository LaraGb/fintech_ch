import React from "react";
import Hero from "./_components/section/hero/Index";
import About from "./_components/section/about/Index";
import Accordion from "./_components/section/accordion/Index";
import FinalCTA from "./_components/section/CTA/FinalCTA";
import Option from "./_components/section/option/Index";
import Service from "./_components/section/service/Index";

export default function page() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Option />
      <Accordion />
      <FinalCTA />
    </>
  );
}
