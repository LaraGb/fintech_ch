import React from "react";
import { Section, Content } from "@/components/block/Section";
import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/typography/H1";

export default function FinalCTA() {
  return (
    <Section className="bg-primary">
      <Content className="flex flex-col items-center">
        <TypographyH1 variant={"hero"} className="text-center">
          成為智慧的 <br /> 理財專家
        </TypographyH1>
        <Button size={"lg"} className="mt-11">
          立即開立帳戶
        </Button>
      </Content>
    </Section>
  );
}
