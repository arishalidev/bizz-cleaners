import React from 'react';

interface SectionLabelProps {
    children: React.ReactNode
    className?: string
}

const SectionLabel: React.FC<SectionLabelProps> = ({children, className = ""} : SectionLabelProps) => {
    return (
        <h2 className={`font-normal text-gray-600 tracking-wider text-sm ${className}`}>
            {children}
        </h2>
    );
};

export default SectionLabel;