import React from "react";
import { Section, Header, Content } from "@/components/block/Section";
import TypographyH2 from "@/components/typography/H2";

export default function Index() {
  return (
    <Section className="bg-black text-white">
      <Header variant={"left"} className="mr-16 mb-20">
        <TypographyH2 className="text-5xl leading-[118%]" variant={"title"}>
          我們是台灣最優秀的本土原生數位銀行，提供頂級的金融管理服務、全國最多特約通路的信用與簽帳卡、簡單易用的投資
          理財和功能全面的加密貨幣交易。
        </TypographyH2>
      </Header>
      <Content className="flex-between-center">
        <div className="text-8xl text-[#7B7B60]">
          <h2>多達</h2>
          <span className="text-primary font-medium">1 千 5 百萬</span>
          <div>忠實客戶</div>
        </div>
        <div className="text-8xl text-[#7B7B60]">
          <h2>超過</h2>
          <span className="text-primary font-medium">6,000</span>
          <div>特約商店</div>
        </div>
      </Content>
    </Section>
  );
}
