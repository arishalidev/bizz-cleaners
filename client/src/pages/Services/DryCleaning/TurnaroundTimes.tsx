import React from 'react';
import Headline from "../../../components/Headline.tsx";
import TurnaroundTime from "./TurnaroundTime.tsx";

import { PiLightning,PiVan,PiClock } from "react-icons/pi";


interface TurnaroundTimesProps {

}

const TurnaroundTimes: React.FC<TurnaroundTimesProps> = ({}) => {
    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>Turnaround times</Headline>
            <div className={"mt-4 flex flex-col gap-4"}>
                <TurnaroundTime Icon={PiLightning} text={"Same-day service"}
                               description={"Drop off qualifying items before 9:00 AM and have them ready by 3:00 PM."}></TurnaroundTime>
                <TurnaroundTime Icon={PiClock} text={"Standard service"}
                                description={"Most dry cleaning orders are ready the next business day."}></TurnaroundTime>
                <TurnaroundTime Icon={PiVan} text={"Pickup and delivery"}
                                description={"Items are typically returned the day after they're cleaned."}></TurnaroundTime>
            </div>
        </div>
    );
};

export default TurnaroundTimes;