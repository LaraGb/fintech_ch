import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Header, Content } from "@/components/block/Section";
import { testimonials } from "@/data";
import TypographyH2 from "@/components/typography/H2";

export default function Index() {
  return (
    <Section>
      <Header>
        <TypographyH2 variant={"title"}>有問，就有答</TypographyH2>
      </Header>
      <Content className="max-w-[843px] mx-auto">
        <Accordion type="single" collapsible>
          {testimonials.map((testimonial) => (
            <AccordionItem
              key={testimonial.id}
              value={`item-${testimonial.id}`}
            >
              <AccordionTrigger>{testimonial.question}</AccordionTrigger>
              <AccordionContent>{testimonial.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Content>
    </Section>
  );
}
