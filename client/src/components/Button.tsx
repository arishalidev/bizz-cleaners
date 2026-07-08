import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "other";
}

function Button({children, variant = "primary", className = "", ...rest}: ButtonProps) {

    const styles = {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-white text-neutral-900 hover:bg-neutral-50",
        other: "bg-white text-primary-500 hover:bg-neutral-50 border border-primary-500"
    };

    return(
        <button
            className={`py-2 px-4 md:py-3 lg:px-6 rounded-md shadow-md active:shadow-2xs ${styles[variant]} ${className}`}
            {...rest}
        >{children}</button>
    )
}

export default Button;
