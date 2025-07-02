// Button.types.ts
import React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./buttonVariants"; // Adjust the import path as necessary

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {

  /**
   * Renders as a child component (like a <Link>).
   */
  asChild?: boolean;

  /**
   * Displays a loading spinner instead of button content.
   */
  loading?: boolean;

  /**
   * Optional icon to render before the button text.
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional icon to render after the button text.
   */
  rightIcon?: React.ReactNode;
}

export { buttonVariants };
