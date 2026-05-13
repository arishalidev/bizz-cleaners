import * as React from "react";

interface headlineProps {
    children: React.ReactNode;
    className?: string
}
function Headline({children, className=""}: headlineProps) {
    return (
        <h2 className={`font-semibold text-2xl ${className}`}>{children}</h2>
    )
}

export default Headline