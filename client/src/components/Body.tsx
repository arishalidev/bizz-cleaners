import React from 'react';

interface BodyProps {
    children: React.ReactNode
    className?: string
}

const Body: React.FC<BodyProps> = ({children, className=""} : BodyProps) => {
    return (
        <p className={`text-[18px]/8 ${className}`}>
            {children}
        </p>
    );
};

export default Body;