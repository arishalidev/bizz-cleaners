import * as React from "react";

interface headlineProps {
    children: React.ReactNode;
}
function Headline({children}: headlineProps) {
    return (
        <h2 className={"font-bold text-xl mb-4"}>{children}</h2>
    )
}

export default Headline