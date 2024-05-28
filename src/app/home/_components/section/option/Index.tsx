import React from "react";
import {
  Section,
  Header,
  Content,
  SectionLabel,
} from "@/components/block/Section";
import { cards } from "@/data";
import { Button } from "@/components/ui/button";
import { pageIcons } from "@/utils/pageIcons";
import TypographyH2 from "@/components/typography/H2";
import TypographyH3 from "@/components/typography/H3";
import OptionCard from "./Card";

export default function Index() {
  return (
    <Section className="bg-[#F7F8F1]">
      <Header>
        <SectionLabel label="為所有人打造" />
        <TypographyH2 variant={"title"}>找到適合的選擇</TypographyH2>
      </Header>
      <Content className="space-y-5">
        {cards.map((card) => (
          <OptionCard data={card} key={card.id} />
        ))}
      </Content>
    </Section>
  );
}
