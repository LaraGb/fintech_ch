import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const paragraphVariants = cva(
  "",
  {
    variants: {
      variant: {
        default:
        "leading-[140%]",
      },
      marginTop: {
        default: "mt-0", 
        md: "mt-3",   
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
    VariantProps<typeof paragraphVariants> {}


const TypographyP: React.FC<ParagraphProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(paragraphVariants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </p>
  )
}

export default TypographyP
