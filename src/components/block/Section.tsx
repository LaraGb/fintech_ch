import React from "react";
import { Badge } from "../ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* HEADER */

const headerVariants = cva("antialiased", {
  variants: {
    variant: {
      centralized:
        "max-w-[778px] mx-auto text-center flex flex-col items-center mb-[4.5rem]",
      between: "flex text-left justify-between [&>*]:max-w-xl mb-20",
      left: "text-left mb-8 lg:pr-4",
    },
  },
  defaultVariants: {
    variant: "centralized",
  },
});

export interface HeaderPros
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const Header: React.FC<HeaderPros> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div className={cn(headerVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

/* LABEL */

export default function SectionLabel({ label }: { label: string }) {
  return <Badge className="mb-4">{label}</Badge>;
}

/* CONTENT */

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/* SECTION */

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("section", className)}>
      <div className="wide-wrapping">{children}</div>
    </div>
  );
}

export { Header, Section, Content, SectionLabel, headerVariants };
