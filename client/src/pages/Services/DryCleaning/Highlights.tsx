import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Highlight from "../../../components/Highlight.tsx";

import {PiDeviceMobileSpeaker, PiTShirt} from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { MdLoop } from "react-icons/md";
import Body from "../../../components/Body.tsx";

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>Why choose professional dry cleaning?</Headline>
            <Body subtext={true} className={"mt-1"}> Dry cleaning helps extend the life of your clothing while keeping garments looking their best. </Body>
            <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                <Highlight Icon={PiDeviceMobileSpeaker} text={"Professional stain removal"}
                           description={"From food and drink spills to everyday marks and stains, professional cleaning gives many garments a better chance of being restored than home washing alone."}/>
                <Highlight Icon={TfiLocationPin} text={"Helps garments keep their shape"}
                           description={"Many fabrics can shrink, stretch, or lose their structure when washed incorrectly. Dry cleaning helps protect delicate materials and tailored garments."}/>
                <Highlight Icon={PiTShirt} text={"Expert pressing and finishing"}
                           description={"Every item is professionally pressed to give it a clean, crisp appearance that's ready to wear."}/>
                <Highlight Icon={MdLoop} text={"Save time and effort"}
                           description={"Skip the sorting, washing, ironing, and guesswork. We'll take care of it for you."}/>
            </div>
        </div>
    );
};

export default Highlights;
