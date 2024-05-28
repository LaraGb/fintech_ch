import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const h2Variants = cva("scroll-m-20 antialiased ", {
  variants: {
    variant: {
      default: "font-semibold tracking-tight",
      title: "font-medium !leading-[110%] antialiased text-[5rem]",
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
    VariantProps<typeof h2Variants> {}

const TypographyH2: React.FC<ParagraphProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(h2Variants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </h2>
  );
};

export default TypographyH2;
