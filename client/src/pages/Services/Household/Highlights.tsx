import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Highlight from "./Highlight.tsx";

import { BiSolidBlanket } from "react-icons/bi";
import { GiPillow } from "react-icons/gi";
import { MdCurtainsClosed } from "react-icons/md";
import { RiBearSmileFill } from "react-icons/ri";

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>Household items we clean</Headline>
            <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                <Highlight Icon={BiSolidBlanket} text={"Comforters and blankets"}
                           description={"From everyday comforters to down and feather-filled bedding, we'll clean your items and return them fresh, fluffy, and ready for use."}/>
                <Highlight Icon={GiPillow} text={"Pillows"}
                           description={"Pillows collect dust, oils, and allergens over time. Professional cleaning can help freshen them up and keep your sleeping area cleaner."}/>
                <Highlight Icon={MdCurtainsClosed} text={"Curtains and drapes"}
                           description={"Curtains naturally collect dust and odors. A professional cleaning can help brighten them up and freshen your space."}/>
                <Highlight Icon={RiBearSmileFill} text={"Stuffed animals"}
                           description={"From small keepsakes to oversized favorites, we'll carefully clean stuffed animals and return them ready for more hugs."}/>
            </div>
        </div>
    );
};

export default Highlights;
