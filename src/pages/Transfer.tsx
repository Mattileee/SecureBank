import React, { useState } from "react";
import Layout from "../components/Layout";
import { Card } from "@/components/ui/card";
import TransferForm from "@/components/TransferForm";
import RecentTransfers from "@/components/RecentTransfers";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// Dummy utility function for demonstration. Replace with your actual implementation.
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Dummy buttonVariants for demonstration. Replace with your actual implementation.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Extend ButtonProps to include variants and common HTML attributes
type ButtonOrAnchorProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false; type?: "button" | "submit" | "reset" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: false; type?: undefined })
  | (React.HTMLAttributes<HTMLElement> & { asChild: true; type?: "button" | "submit" | "reset" });

type ButtonProps = VariantProps<typeof buttonVariants> & ButtonOrAnchorProps;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : type ? "button" : "a"

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      )
    } else if (type) {
      // Render as <button>
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(buttonVariants({ variant, size, className }))}
          type={type}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        />
      )
    } else {
      // Render as <a>
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          href={(props as React.AnchorHTMLAttributes<HTMLAnchorElement>).href ?? "#"}
        />
      )
    }
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

const accounts = [
  { id: '1', name: 'Primary Checking', number: '****1234', balance: 5420.50 },
  { id: '2', name: 'Emergency Fund Savings', number: '****5678', balance: 12750.00 },
  { id: '3', name: 'Rewards Credit Card', number: '****9012', balance: -1250.00 }
];

const recentTransfers = [
  { id: '1', from: 'Checking ****1234', to: 'Savings ****5678', amount: 500.00, date: '2024-01-14' },
  { id: '2', from: 'Savings ****5678', to: 'Checking ****1234', amount: 200.00, date: '2024-01-10' },
  { id: '3', from: 'Checking ****1234', to: 'Credit ****9012', amount: 300.00, date: '2024-01-08' }
];

const Transfer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = (data: { fromAccount: string; toAccount: string; amount: string; description: string }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // You can add toast or state update here
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transfer Money</h1>
          <p className="text-gray-600 mt-1">Transfer funds between your accounts instantly</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <TransferForm accounts={accounts} onTransfer={handleTransfer} isLoading={isLoading} />
          </Card>
          <RecentTransfers recentTransfers={recentTransfers} />
        </div>
        {/* ...Quick Transfer Options... */}
      </div>
    </Layout>
  );
};

export default Transfer;