import * as React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: "primary" | "secondary";
}
function Button({children, onClick, variant = "primary"}: ButtonProps) {

    const styles = {
        primary: "bg-primary-500 text-white",
        secondary: "bg-white text-neutral-900"
    };

    return(
        <button
            className={`mt-12 p-4 rounded-md shadow-sm ${styles[variant]}`}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button;
