import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold cursor-pointer overflow-hidden transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-hero-action text-primary-foreground font-bold shadow-neon border border-cyan/40 hover:-translate-y-0.5 hover:shadow-neon-strong after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:-translate-x-full hover:after:animate-[btn-shimmer_1.4s_infinite]",
        outlineNeon:
          "border border-cyan/40 bg-[color-mix(in_oklab,var(--panel)_75%,transparent)] text-foreground font-semibold shadow-neon-soft backdrop-blur-md hover:-translate-y-0.5 hover:border-cyan hover:bg-[color-mix(in_oklab,var(--panel-strong)_90%,transparent)] hover:shadow-neon hover:text-cyan after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-cyan/20 after:to-transparent after:-translate-x-full hover:after:animate-[btn-shimmer_1.6s_infinite]",
        nav: "border border-cyan/30 bg-[color-mix(in_oklab,var(--panel)_80%,transparent)] text-foreground font-semibold shadow-neon-soft backdrop-blur-md hover:border-cyan hover:bg-panel-strong hover:shadow-neon hover:text-cyan hover:-translate-y-0.5",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-14 px-9 text-base",
        nav: "h-11 px-7 text-sm",
        icon: "h-9 w-9",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
