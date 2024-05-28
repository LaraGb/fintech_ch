import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="bg-black text-white">
      <div className="larger_wide_wrapping mx-auto  flex-between-center">
        <Image width={156} height={48} src="/logo.png" alt="" />
        <ul className="flex space-x-[3.6vw]">
          <li>儲蓄</li>
          <li>信用卡</li>
          <li>投資</li>
          <li>加密貨幣</li>
        </ul>
        <div className="flex-items-center py-6">
          <Button variant={"transparent"}>登入</Button>
          <Button variant={"accent"}>開立帳戶</Button>
        </div>
      </div>
    </div>
  );
}
