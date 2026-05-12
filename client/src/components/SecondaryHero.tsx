import React from 'react';
import heroImage from "../assets/hero-image.jpg";

interface SecondaryHeroProps {
    header: string,
    subHeader: string,
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({header, subHeader} : SecondaryHeroProps) => {
    return (
        <div className={"relative overflow-hidden max-h-72"}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"block w-full object-cover min-h-100"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"m-4"}>
                <div className={"absolute top-24 text-white space-y-2"}>
                    <h1 className={"text-3xl font-bold w-80"}>{header}</h1>
                    <h2 className={"text-xl font-medium w-70"}>{subHeader}</h2>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHero;