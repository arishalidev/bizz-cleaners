import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

function Button({children, variant = "primary", className = "", ...rest}: ButtonProps) {

    const styles = {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-white text-neutral-900 hover:bg-neutral-50"
    };

    return(
        <button
            className={`p-4 rounded-md shadow-md active:shadow-2xs ${styles[variant]} ${className}`}
            {...rest}
        >{children}</button>
    )
}

export default Button;
