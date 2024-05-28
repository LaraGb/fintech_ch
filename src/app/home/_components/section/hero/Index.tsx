import React from "react";
import { Section, Header } from "@/components/block/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TypographyH1 from "@/components/typography/H1";
import { partnerbrands } from "@/data";

export default function Index() {
  return (
    <div className="relative">
      <Section className="bg-black text-white ">
        <Header className="px-2">
          <Badge className="mb-7">台灣 #1 數位銀行</Badge>
          <TypographyH1 variant={"hero"}>
            <span className="text-accent">100%</span>免煩惱的 <br />{" "}
            新時代全能銀行
          </TypographyH1>
          <Button
            size={"lg"}
            variant={"accent"}
            className="mt-10 font-semibold"
          >
            立即開立帳戶
          </Button>
        </Header>
      </Section>
      <img className=" w-full  absolute top-10" src="/card.png" alt="" />
      <div className="mt-72"></div>
      <div className="larger_wide_wrapping mx-auto text-center">
        <div className="flex-between-center">
          {partnerbrands.map((brand) => (
            <img key={brand.id} className="h-[48px]" src={brand.image} alt="" />
          ))}
        </div>
        <div className="mt-6 text-muted-foreground">
          我們深受超過 3,000 家企業信賴
        </div>
      </div>
    </div>
  );
}
