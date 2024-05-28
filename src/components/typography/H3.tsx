import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const h3Variants = cva("scroll-m-20 antialiased text-2xl", {
  variants: {
    variant: {
      default: "tracking-tight",
      subtitle: "text-lg font-normal tracking-tight !mt-5 leading-[140%]",
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
    VariantProps<typeof h3Variants> {}

const TypographyH3: React.FC<ParagraphProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(h3Variants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;
