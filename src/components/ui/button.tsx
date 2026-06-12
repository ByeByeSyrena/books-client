import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        cosmicOutline:
          "border border-purple-glow/60 bg-background/60 text-content-primary hover:bg-purple-glow/10 dark:bg-input/20",
        primaryBlue:
          "primary-blue-border-hover border-[1px] border-transparent text-content-on-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-primary-blue)_padding-box,var(--gradient-primary-blue-border)_border-box] hover:brightness-105 active:brightness-95",
        purpleGlow:
          "purple-glow-border-hover border-[1px] border-transparent text-content-on-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-purple-glow)_padding-box,var(--gradient-purple-glow-border)_border-box] hover:brightness-105 active:brightness-95",
        pinkSunset:
          "pink-sunset-border-hover border-[1px] border-transparent text-content-on-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-pink-sunset)_padding-box,var(--gradient-pink-sunset-border)_border-box] hover:brightness-105 active:brightness-95",
        goldWarm:
          "gold-warm-border-hover border-[1px] border-transparent text-content-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.22),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-gold-warm)_padding-box,var(--gradient-gold-warm-border)_border-box] hover:brightness-105 active:brightness-95",
        tealMint:
          "teal-mint-border-hover border-[1px] border-transparent text-content-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-teal-mint)_padding-box,var(--gradient-teal-mint-border)_border-box] hover:brightness-105 active:brightness-95",
        grape:
          "grape-border-hover border-[1px] border-transparent text-content-on-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-grape)_padding-box,var(--gradient-grape-border)_border-box] hover:brightness-105 active:brightness-95",
        sky:
          "sky-border-hover border-[1px] border-transparent text-content-on-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.2)] [background:linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_42%)_padding-box,var(--gradient-sky)_padding-box,var(--gradient-sky-border)_border-box] hover:brightness-105 active:brightness-95",
      },
      size: {
        xs: "h-7 rounded-md gap-1 px-2.5 text-xs has-[>svg]:px-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
        icon: "size-9 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
