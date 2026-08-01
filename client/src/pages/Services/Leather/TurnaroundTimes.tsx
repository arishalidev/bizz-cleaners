import React from 'react';
import Headline from "../../../components/Headline.tsx";
import TurnaroundTime from "./TurnaroundTime.tsx";

import { IoPricetagOutline } from "react-icons/io5";
import { PiClock } from "react-icons/pi";


interface TurnaroundTimesProps {

}

const TurnaroundTimes: React.FC<TurnaroundTimesProps> = ({}) => {
    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <div className={"-mt-8 md:-mt-16"}>
                <Headline>Pricing and turnaround time</Headline>
                <div className={"mt-4 flex flex-col gap-4"}>
                    <TurnaroundTime Icon={IoPricetagOutline} text={"Pricing"}
                                    description={"Leather cleaning is priced by the garment, so we'll need to see the item before providing a quote"}></TurnaroundTime>

                    <TurnaroundTime Icon={PiClock} text={"Turnaround time"}
                                    description={"Most leather cleaning orders are completed within one week."}></TurnaroundTime>
                </div>
            </div>
        </div>
    );
};

export default TurnaroundTimes;