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
                                    description={"Every wedding dress is unique, so pricing is provided after we inspect the gown Factors such as fabric type, embellishments, staining, and overall condition all affect the final cost."}></TurnaroundTime>

                    <TurnaroundTime Icon={PiClock} text={"Turnaround time"}
                                    description={"Most wedding dress cleaning and preservation orders are completed within 2–3 weeks."}></TurnaroundTime>
                </div>
            </div>
        </div>
    );
};

export default TurnaroundTimes;