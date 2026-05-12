import React from 'react';

interface TrustCardProps {
    heading: string,
    subheading: string
}

const TrustCard: React.FC<TrustCardProps> = ({heading, subheading} : TrustCardProps) => {
    return (
        <div className={"flex relative"}>
            <div className={"w-2 bg-primary-500 rounded-l-md"}></div>
            <div className={"bg-white flex-1 h-48 rounded-r-md shadow-md"}>
                <div className={"ml-4"}>
                    <h2 className={"mt-8 w-16 text-2xl"}>{heading}</h2>
                    <h3 className={"absolute bottom-6 text-base"}>{subheading}</h3>
                </div>
            </div>
        </div>
    );
};

export default TrustCard;