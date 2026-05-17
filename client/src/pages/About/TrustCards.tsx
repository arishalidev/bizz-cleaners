import React from 'react';
import TrustCard from "./TrustCard.tsx"

interface TrustCardsProps {

}

const TrustCards: React.FC<TrustCardsProps> = ({}) => {
    return (
        <div className={"flex flex-col gap-8 responsive-px limit-size py-8"}>
            <TrustCard heading={"10,000+ Orders"} subheading={"Delivered Directly"}></TrustCard>
            <TrustCard heading={"50,000+ Customers"} subheading={"Happily Served"}></TrustCard>
            <TrustCard heading={"1 Million+"} subheading={"Garments Pressed"}></TrustCard>

        </div>
    );
};

export default TrustCards;