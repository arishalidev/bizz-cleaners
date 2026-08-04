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
                                    description={"Shoe cleaning and repairs is priced by the pair, so we'll need to see them before providing a quote"}></TurnaroundTime>

                    <TurnaroundTime Icon={PiClock} text={"Turnaround time"}
                                    description={"Most shoe cleaning and repair orders are completed within 2–3 days. For specific repairs or specialty items, turnaround times may vary."}></TurnaroundTime>
                </div>
            </div>
        </div>
    );
};

export default TurnaroundTimes;