import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageIcons } from "@/utils/pageIcons";

export default function OptionCard({ data }: { data: any }) {
  return (
    <Card className="flex justify-between bg-white p-4 rounded-xl">
      <div className="flex flex-col items-start max-w-80 py-4 pl-4">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="mt-4 text-[#808490] text-lg">
          {data.description}
        </CardDescription>
        <Button variant="secondary" className="mt-auto">
          <span>進一步了解</span>
          <PageIcons.ArrowRight className="text-[1.1rem] ml-3" />
        </Button>
      </div>
      <div
        className="w-96 h-56 border rounded-xl overflow-hidden relative"
        style={{ backgroundColor: data.brand.bg }}
      >
        <div
          style={{
            background: `linear-gradient(${data.brand.linear_card_color})`,
          }}
          className="absolute w-[243.65px] h-[300px] top-12 right-4 rounded-3xl -rotate-[30deg] "
        >
          <h3 className="absolute text-[15px] text-black/20 -left-1 font-bold rotate-[90deg] top-16">
            LIN TZU CHING
          </h3>
        </div>
      </div>
    </Card>
  );
}
