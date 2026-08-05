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
            <div>
                <Headline>Pricing and turnaround time</Headline>
                <div className={"mt-4 flex flex-col gap-4"}>
                    <TurnaroundTime Icon={IoPricetagOutline} text={"Pricing"}
                                    description={"Pricing is provided on a per-garment basis after inspection."}></TurnaroundTime>

                    <TurnaroundTime Icon={PiClock} text={"Turnaround time"}
                                    description={"Most Indian garment cleaning orders are completed within 2–3 days."}></TurnaroundTime>
                </div>
            </div>
        </div>
    );
};

export default TurnaroundTimes;
