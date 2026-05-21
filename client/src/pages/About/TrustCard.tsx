import React from 'react';
import { TfiAngleRight } from "react-icons/tfi";

interface TrustCardProps {
    heading: string,
    subheading: string,
}

const TrustCard: React.FC<TrustCardProps> = ({heading, subheading} : TrustCardProps) => {
    return (
        <div className={`flex relative lg:flex-1 h-full rounded-md shadow-md bg-white`}>
            <div className={"w-2 bg-primary-500 rounded-l-md"}></div>
            <div className={"ml-4 h-48"}>
                <h2 className={"mt-8 w-16 text-2xl"}>{heading}</h2>
                <h3 className={"absolute bottom-6 text-base"}>{subheading}</h3>
            </div>

            <TfiAngleRight className={"absolute right-6 top-7 rotate-315 text-4xl text-neutral-700 opacity-35"}></TfiAngleRight>
        </div>
    );
};

export default TrustCard;