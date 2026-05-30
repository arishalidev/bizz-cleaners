import React from 'react';

interface BodyProps {
    children: React.ReactNode
    className?: string
}

const Body: React.FC<BodyProps> = ({children, className=""} : BodyProps) => {
    return (
        <p className={`text-base/7.5 md:text-lg/8 ${className}`}>
            {children}
        </p>
    );
};

export default Body;