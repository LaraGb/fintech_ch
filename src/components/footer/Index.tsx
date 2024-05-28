import React from "react";
import { routes } from "@/data";
import { Button } from "../ui/button";
import { PageIcons } from "@/utils/pageIcons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="larger_wide_wrapping flex flex-col lg:flex-row justify-between gap-y-10 py-12 border-t-2 border-black/10">
        <div className="flex-between-center lg:flex-col ">
          <Image alt="logo" src={"/dark_logo.png"} width={208} height={64} />
          <div className="flex-items-center space-x-4 mt-auto">
            <Button size={"sm"}>
              <PageIcons.GooglePlay className="text-2xl" />
              <div className="ml-2 text-left">
                <h4 className="leading-[100%]">Globo Play</h4>
                <small>立即下載</small>
              </div>
            </Button>
            <Button size={"sm"} className="space-x-1 ">
              <PageIcons.Apple className="text-2xl" />
              <div className="ml-2 text-left">
                <h4 className="leading-[100%]">App Store</h4>
                <small>下載</small>
              </div>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 py-6">
          {routes.map((route) => (
            <div key={route.path}>
              <h4 className="font-semibold">{route.name}</h4>
              <ul className="mt-4 space-y-3">
                {route.children.map((data) => (
                  <li key={data.path}>{data.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-between-center larger_wide_wrapping py-8 border-t-2 border-black/10">
        <div>2024 © 新葉銀行</div>
        <div>
          <Button variant={"transparent"} size={"icon"}>
            <PageIcons.Instagram />
          </Button>
          <Button variant={"transparent"} size={"icon"}>
            <PageIcons.Threads />
          </Button>
          <Button variant={"transparent"} size={"icon"}>
            <PageIcons.Facebook />
          </Button>
        </div>
      </div>
    </footer>
  );
}
