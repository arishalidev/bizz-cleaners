import React from 'react';

interface SectionLabelProps {
    children: React.ReactNode
    className?: string
}

const SectionLabel: React.FC<SectionLabelProps> = ({children, className = ""} : SectionLabelProps) => {
    return (
        <div className={"inline-flex items-center gap-3"}>
            <div className={"rounded-full bg-primary-500 w-3 h-3"}></div>
            <h2 className={`font-normal text-gray-600 tracking-wider text-sm ${className}`}>
                {children}
            </h2>
        </div>
    );
};

export default SectionLabel;