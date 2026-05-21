import React from 'react';
import TrustCard from "./TrustCard.tsx"
import Headline from "../../components/Headline.tsx";

interface TrustCardsProps {

}

const TrustCards: React.FC<TrustCardsProps> = ({}) => {
    return (

        <div className={"responsive-px limit-size responsive-py"}>
            <Headline>Why Customers Keep Coming Back</Headline>
            <div className={"flex flex-col gap-8 py-8 md:flex-row lg:mt-12"}>
                <div className={"flex-1 h-96"}>
                    <TrustCard heading={"10,000+ Orders"} subheading={"Delivered Directly"}></TrustCard>
                </div>
                <div className={"flex-1 h-72"}>
                    <div className={"md:h-24"}></div>
                    <TrustCard heading={"50,000+ Customers"} subheading={"Happily Served"}></TrustCard>
                </div>

                <div className={"flex-1 h-48"}>
                    <div className={"md:h-48"}></div>
                    <TrustCard heading={"1 Million+"} subheading={"Garments Pressed"}></TrustCard>
                </div>
            </div>
        </div>
    );
};

export default TrustCards;