import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Highlight from "../../../components/Highlight.tsx";

import { PiHandHeart } from "react-icons/pi";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import { PiStar } from "react-icons/pi";

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>Why bring your leather garments to us?</Headline>
            <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                <Highlight Icon={PiHandHeart} text={"Cleaned one piece at a time"}
                           description={"Leather garments aren't all treated the same. Every item is inspected before cleaning so we can choose the right approach."}/>
                <Highlight Icon={PiMoney} text={"Help your investment last longer"}
                           description={"Leather clothing can be expensive to replace. Regular professional cleaning helps keep your favorite pieces looking their best."}/>
                <Highlight Icon={PiStar} text={"Experienced garment care"}
                           description={"From jackets and coats to skirts and pants, we've worked with a wide variety of leather garments over the years."}/>
                <Highlight Icon={PiMagnifyingGlass} text={"Inspected before pickup"}
                           description={"Before your garment is returned, our team gives it a final inspection to make sure it's ready to go."}/>
            </div>
        </div>
    );
};

export default Highlights;
