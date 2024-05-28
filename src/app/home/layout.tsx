import React from "react";
import TopBar from "./_components/top-bar/Index";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
}
