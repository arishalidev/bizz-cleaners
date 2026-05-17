import React from 'react';

interface BodyProps {
    children: React.ReactNode
    className?: string
}

const Body: React.FC<BodyProps> = ({children, className=""} : BodyProps) => {
    return (
        <p className={`text-lg/9 md:text-xl/8 ${className}`}>
            {children}
        </p>
    );
};

export default Body;