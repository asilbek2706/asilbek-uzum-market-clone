import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Divider = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={twMerge("border-b border-gray-200 w-full", className)}
            {...props}
        />
    );
};

export default Divider;
