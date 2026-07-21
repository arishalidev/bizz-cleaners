import React from 'react';
import Headline from "../../components/Headline.tsx";
import Highlight from "./Highlight.tsx";

import { PiTrophy } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiVan } from "react-icons/pi";

import customerService from "../../assets/customerService.jpg"
import orderDelivered from "../../assets/orderDelivered.jpg"
import Button from "../../components/Button.tsx";

import {linkToDirections, linkToPortal} from "../../utils/links.ts";

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
            <div className={"responsive-py responsive-px limit-size-5xl"}>
                <Headline>Why customers choose Bizz Cleaners</Headline>
                <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                    <Highlight Icon={PiTrophy} text={"Serving customers since 1996"}
                              description={"30 years of experience caring for everything from everyday clothing to specialty garments."} image={customerService}/>
                    <Highlight Icon={PiHouse} text={"Everything cleaned in-house"}
                               description={"Your garments stay with our team from start to finish – nothing is sent to another facility."}/>
                    <Highlight Icon={PiVan} text={"Free pickup and delivery"}
                               description={"Professional garment care without another stop in your day."} image={orderDelivered}/>

                    <Highlight Icon={PiClock} text={"Same-day service available"}
                               description={"Drop off qualifying items before 9 AM and have them ready by 3 PM."}/>
                </div>

                <div className={"mt-12 flex gap-3"}>
                    <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule collection </Button>
                    <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToDirections} variant={"other"}>Find Us</Button>
                </div>

            </div>
    );
};

export default Highlights;