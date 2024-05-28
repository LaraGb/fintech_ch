import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const h1Variants = cva("antialiased text-8xl tracking-tight", {
  variants: {
    variant: {
      default: "!leading-[118%] scroll-m-20",
      hero: " !leading-[110%] text-[6.875rem]",
    },
    marginTop: {
      default: "mt-0",
      large: "mt-10",
      small: "mt-2",
    },
  },
  defaultVariants: {
    variant: "default",
    marginTop: "default",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof h1Variants> {}

const TypographyH1: React.FC<ParagraphProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <h1
      className={cn(h1Variants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;
