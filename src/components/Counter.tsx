import React, { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

// Glare counter base styles
export const glareCounterStyles = cva(
  [
    "flex justify-center items-center",
    "w-[14px] h-[14px]",
    "rounded-full",
    "border border-[--background-system-body-primary]",
    "bg-[--background-system-state-negative]",
    "text-[8px]",
    "text-white",
    "overflow-hidden",
    "h-[15px] w-[15px]",
  ],
  {
    variants: {
      variant: {
        default: "bg-[var(--background-system-state-negative)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Extracting the types of the variants used in glareCounterStyles
export type GlareCounterStylesProps = VariantProps<typeof glareCounterStyles>;

interface Props
  extends HTMLAttributes<HTMLDivElement>,
  GlareCounterStylesProps {
  label: number; // label of the counter it should be a number
}

export const Counter: React.FC<Props> = ({ label, variant, ...props }) => {
  return (
    <section
      {...props}
      className={cn(glareCounterStyles({ variant }), props.className)}
    >
      <p>{label}</p>
    </section>
  );
};

export default Counter;
