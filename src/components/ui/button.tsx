"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-target",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-[#1565C0] hover:text-white active:bg-[#0D47A1] shadow-sm hover:shadow-md",
        secondary:
          "bg-secondary text-neutral-900 hover:bg-[#1565C0] hover:text-white active:bg-[#0D47A1] shadow-sm",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] active:bg-[#0D47A1]",
        ghost:
          "text-primary hover:bg-[#E3F2FD] hover:text-[#1565C0] active:bg-[#BBDEFB]",
        link:
          "text-primary underline-offset-4 hover:underline hover:text-[#1565C0] p-0 h-auto font-medium",
        destructive:
          "bg-error text-white hover:bg-red-700 active:bg-red-800",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
