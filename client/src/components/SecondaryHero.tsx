import React from 'react';
import heroImage from "../assets/hero-image.jpg";

interface SecondaryHeroProps {
    header: string,
    subHeader?: string,
    cta?: React.ReactNode,
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({header, subHeader = "", cta} : SecondaryHeroProps) => {
    return (
        <div className={"relative overflow-hidden max-h-72"}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"block w-full object-cover min-h-105"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"responsive-px limit-size"}>
                <div className={"absolute top-18 text-white space-y-2"}>
                    <h1 className={"text-3xl font-semibold w-80 md:w-full"}>{header}</h1>
                    <h2 className={"text-xl font-normal w-100"}>{subHeader}</h2>
                    {<div className={"mt-8"}>{cta}</div>}
                </div>
            </div>
        </div>
    );
};

export default SecondaryHero;