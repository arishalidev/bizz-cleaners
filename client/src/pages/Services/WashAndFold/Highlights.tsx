import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Highlight from "../../../components/Highlight.tsx";

import { PiWashingMachine } from "react-icons/pi";
import { PiShirtFolded } from "react-icons/pi";
import { PiVan } from "react-icons/pi";
import { TbArrowsSort } from "react-icons/tb";
import deliveredClothes from "../../../assets/deliveredClothes.jpg";

interface HighlightsProps {

}

const Highlights: React.FC<HighlightsProps> = ({}) => {

    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>What’s included?</Headline>
            <div className={"flex flex-col justify-center place-items-center gap-6 mt-6"}>
                <Highlight Icon={TbArrowsSort} text={"Clothes sorted before washing"}
                           description={"Whites and colors are separated to help protect your clothing during the wash process."}/>
                <Highlight Icon={PiWashingMachine} text={"Quality detergents and softeners"}
                           description={"We use high-quality detergent, fabric softeners, and dryer sheets to leave clothes fresh, soft, and ready to wear."}/>
                <Highlight Icon={PiShirtFolded} text={"Neatly folded every time"}
                           description={"Once cleaned, your laundry is folded, wrapped, and placed back into your wash and fold bag for easy pickup."}/>
                <Highlight Icon={PiVan} text={"Pickup and delivery available"}
                           description={"Many customers pair wash and fold service with our pickup and delivery program for even more convenience. "}/>
            </div>

            <img className={"rounded-md mx-auto max-w-5xl w-full mt-8"} src={deliveredClothes}
                 alt={"Clothes including wash and fold delivered at your door"}/>

        </div>
    );
};

export default Highlights;
