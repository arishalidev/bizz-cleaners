import React from 'react';

interface BodyProps {
    children: React.ReactNode
}

const Body: React.FC<BodyProps> = ({children} : BodyProps) => {
    return (
        <p className={"text-base"}>
            {children}
        </p>
    );
};

export default Body;