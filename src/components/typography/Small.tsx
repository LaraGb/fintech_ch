import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const smallVariants = cva(
  "",
  {
    variants: {
      variant: {
        default:
        "leading-[150%] text-sm",
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


export interface smallProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof smallVariants> {}


const TypographySmall: React.FC<smallProps> = ({
  className,
  variant,
  marginTop,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(smallVariants({ variant, marginTop, className }))}
      {...props}
    >
      {children}
    </p>
  )
}

export default TypographySmall