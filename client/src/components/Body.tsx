import React from 'react';

interface BodyProps {
    children: React.ReactNode
    subtext?: boolean
    className?: string
}

const Body: React.FC<BodyProps> = ({children, className="", subtext=false} : BodyProps) => {
    return (
        <>
            {subtext ?
                <p className={`text-base/7  md:text-lg/8 text-neutral-600 ${className}`}>
                    {children}
                </p>
                :
                <p className={`text-base/7.5 md:text-lg/8 ${className}`}>
                    {children}
                </p>}
        </>
    );
};

export default Body;