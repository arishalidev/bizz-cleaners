import React from 'react';
import Highlight from "../Home/Highlight.tsx";
import Body from "../../components/Body.tsx";

import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuCalendarSync } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";

interface DeliveryHighlightsProps {

}

const DeliveryHighlights: React.FC<DeliveryHighlightsProps> = ({}) => {
    return (
        <div className={"px-4 py-8"}>

            <div className={"flex flex-col gap-12"}>
                <div className={"flex flex-col gap-2"}>
                    <Highlight Icon={MdOutlinePhoneIphone} text={"Live Tracking"} centerIcon={false} textGreen={false}/>
                    <Body>You'll never wonder where your order is. Track your order the whole way — when we're on the road,
                        when your bag is picked up, and when your clean clothes are back at your door.</Body>
                </div>


                <div>
                    <Highlight Icon={LuCalendarSync} text={"Recurring pickups"} centerIcon={false} textGreen={false}/>
                    <Body>Life is busy. Forgetting your weekly pickup shouldn't ruin your Monday. We'll send you a quick
                        text the day before, and you just reply to confirm. Easy as that.</Body>
                </div>

                <div>
                    <Highlight Icon={TbMoneybag} text={"Weatherproof bag"} centerIcon={false} textGreen={false}/>
                    <Body>Texas weather is… a lot. Your clothes deserve better than a soggy plastic bag. We'll bring you a
                        sturdy, stylish weatherproof bag with your first delivery — yours to keep</Body>
                </div>
            </div>
        </div>
    );
};

export default DeliveryHighlights;