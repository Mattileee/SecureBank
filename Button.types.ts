import React from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants"; // import from the new file

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
