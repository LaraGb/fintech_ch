import React from "react";
import SectionLabel, {
  Section,
  Header,
  Content,
} from "@/components/block/Section";
import { ColumnToRow } from "@/components/block/ColumnToRow";
import { services } from "@/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TypographyH2 from "@/components/typography/H2";
import mock2 from "@/assets/images/moock.png";

export default function Index() {
  return (
    <Section>
      <Header>
        <SectionLabel label="豐富與多樣" />
        <TypographyH2 variant={"title"}>各項金融一手包辦</TypographyH2>
      </Header>
      <Content>
        <ColumnToRow>
          <div className="shrink-0">
            <img src={mock2.src} alt="" className="" />
          </div>
          <div className="">
            <Accordion type="single" collapsible>
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  className="max-h-[180px] overflow-scroll accordion_scroll"
                  value={`item-${service.id}`}
                >
                  <AccordionTrigger className="[&>svg]:hidden">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    新葉銀行專為瞬息萬變的 21
                    世紀打造。我們高度最佳化的網路、行動銀行服務，能成為節奏快速的現代生活中所有人的良伴。
                    世紀打造。我們高度最佳化的網路、行動銀行服務，能成為節奏快速的現代生活中所有人的良伴。
                    世紀打造。我們高度最佳化的網路、行動銀行服務，能成為節奏快速的現代生活中所有人的良伴。
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ColumnToRow>
      </Content>
    </Section>
  );
}
