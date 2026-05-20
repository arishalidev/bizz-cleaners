import React from 'react';
import Body from "../../components/Body.tsx";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuCalendarSync } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import DeliveryHighlight from "./DeliveryHighlight.tsx";
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";

interface DeliveryHighlightsProps {

}

const DeliveryHighlights: React.FC<DeliveryHighlightsProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"responsive-px limit-size py-8 responsive-py"}>
                <SectionLabel>Why Bizz Cleaners</SectionLabel>
                <Headline className={"mt-4"}>Why your neighbors choose Bizz</Headline>
                <div className={"mt-10 mx-2 flex flex-col gap-12 md:grid md:grid-cols-2 lg:flex lg:flex-row"}>
                    <div className={"flex flex-col gap-2"}>
                        <DeliveryHighlight Icon={MdOutlinePhoneIphone} text={"Live Tracking"}/>
                        <Body>You'll never wonder where your order is. Track your order the whole way — when we're on
                            the road,
                            when your bag is picked up, and when your clean clothes are back at your door.</Body>
                    </div>


                    <div className={"flex flex-col gap-2"}>
                        <DeliveryHighlight Icon={LuCalendarSync} text={"Recurring pickups"}/>
                        <Body>Life is busy. Forgetting your weekly pickup shouldn't ruin your Monday. We'll send you a
                            quick
                            text the day before, and you just reply to confirm. Easy as that.</Body>
                    </div>

                    <div className={"flex flex-col gap-2"}>
                        <DeliveryHighlight Icon={TbMoneybag} text={"Weatherproof bag"}/>
                        <Body>Texas weather is… a lot. Your clothes deserve better than a soggy plastic bag. We'll bring
                            you a
                            sturdy, stylish weatherproof bag with your first delivery — yours to keep</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryHighlights;