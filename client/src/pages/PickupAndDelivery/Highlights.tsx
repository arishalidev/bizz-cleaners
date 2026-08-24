import React from 'react';
import Headline from "../../components/Headline.tsx";
import Highlight from "../../components/Highlight.tsx";

import {PiDeviceMobileSpeaker, PiTShirt} from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { MdLoop } from "react-icons/md";

import mobileApp from "../../assets/bizzCleanersApp.jpg"
import deliveredClothes from "../../assets/deliveredClothes.jpg"

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
        <div className={"bg-white"}>
            <div className={"responsive-py responsive-px limit-size-5xl"}>
                <Headline>Why customers love our delivery service</Headline>
                <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                    <Highlight Icon={PiDeviceMobileSpeaker} text={"Easy online scheduling"}
                               description={"Manage pickups, deliveries, and account details through our portal or mobile app."}
                               image={mobileApp}/>
                    <Highlight Icon={TfiLocationPin} text={"Live order tracking"}
                               description={"Follow your order throughout the cleaning and delivery process."}/>
                    <Highlight Icon={PiTShirt} text={"Weatherproof garment bags"}
                               description={"Pickup and delivery customers receive a branded weatherproof bag designed to keep garments protected outdoors."}
                               image={deliveredClothes}/>
                    <Highlight Icon={MdLoop} text={"Recurring pickup reminders"}
                               description={"Want regular service? We'll send a text each week. Simply reply and we'll stop by on your scheduled day."}/>
                </div>
            </div>
        </div>
    );
};

export default Highlights;