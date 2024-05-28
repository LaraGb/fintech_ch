import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("flex items-center [&>*]:w-full ", {
  variants: {
    initialDirection: {
      default: "flex-col",
      reverse: "flex-col-reverse",
    },
    gapX: {
      lg: "gap-x-16",
      md: "gap-x-12",
    },
    gapY: {
      default: "gap-y-0",
      lg: "gap-y-8",
    },
    changePoint: {
      lg: "lg:flex-row lg:[&>*]:w-1/2",
      lg_reverse: "lg:flex-row-reverse lg:[&>*]:w-1/2",
    },
  },
  defaultVariants: {
    initialDirection: "default",
    gapX: "lg",
    gapY: "default",
    changePoint: "lg",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const ColumnToRow = ({
  children,
  gapX,
  gapY,
  changePoint,
  initialDirection,
  className,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
          initialDirection,
          changePoint,
          gapX,
          gapY,
          className,
        })
      )}
    >
      {children}
    </div>
  );
};

export { ColumnToRow };
