import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const h4Variants = cva(
  "scroll-m-20 antialiased",
  {
    variants: {
      variant: {
        default:
        "text-xl tracking-tight",
        subtitle:"max-w-[580px] mx-auto text-lg font-normal tracking-tight mt-4 leading-8"
      },
      marginTop: {
        default: "mt-0", 
        md: "mt-3",   
        lg: "mt-5",
        sm: "mt-1",    
      }
    },
    defaultVariants: {
      variant: "default",
      marginTop: "default",
    }
  }
)


export interface ParagraphProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof h4Variants> {}


const TypographyH4: React.FC<ParagraphProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <h4
      className={cn(h4Variants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </h4>
  )
}

export default TypographyH4