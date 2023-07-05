import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      uiSize: {
        sm: 'h-10 text-sm',
        default: 'h-12 text-base',
        lg: 'h-14'
      }
    },
    defaultVariants: {
      uiSize: 'default'
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, uiSize, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ uiSize, className }))}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
