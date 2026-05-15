import React from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx";
import Button from "../../components/Button.tsx";
import TopQuote from "./TopQuote.tsx";
import Introduction from "./Introduction.tsx";

interface PickupAndDeliveryProps {

}

const PickupAndDelivery: React.FC<PickupAndDeliveryProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={"Six years caring for North DFW's closets"} cta={<Button>Schedule a pickup</Button>}/>
            <TopQuote/>
            <Introduction/>


            <div id={"service-area"}></div>
        </div>
    );
};

export default PickupAndDelivery;