import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(" py-3 px-5 rounded-lg", {
    variants: {
        variant: {
            solid: "bg-purple text-white",
            outline: "border border-purple text-purple",
        },
    },

    defaultVariants: {
        variant: "solid",
    },
});

interface ButtonProps
    extends
        ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(buttonVariants({ variant }), className)}
            {...props}
        />
    );
};

export default Button;
