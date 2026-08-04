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
                               description={"Drop off before 9:00 AM and your shirts will be ready by 3:00 PM."}></TurnaroundTime>
                <TurnaroundTime Icon={PiClock} text={"Standard service"}
                                description={"Most shirt orders are ready the next business day."}></TurnaroundTime>
                <TurnaroundTime Icon={PiVan} text={"Pickup and delivery"}
                                description={"Shirts are typically returned the day after cleaning."}></TurnaroundTime>
            </div>
        </div>
    );
};

export default TurnaroundTimes;