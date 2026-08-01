import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import dryCleanMachine from "../../../assets/dryCleanMachine.jpg";

interface CleanerApproachProps {

}

const CleanerApproach: React.FC<CleanerApproachProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"relative max-w-6xl mx-auto h-fit"}>
                <div className={"responsive-px max-w-5xl md:aspect-3/2 mx-auto responsive-py"}>
                    <div className={"flex flex-col lg:flex-row gap-5"}>
                        <div>
                            <Headline>A cleaner approach to dry cleaning</Headline>
                            <div className={"flex-col flex gap-3 mt-8 md:max-w-3/5"}>
                                <Body>At Bizz Cleaners, we use an eco-friendly hydrocarbon cleaning process instead of
                                    traditional perc-based solvents.</Body>
                                <Body>This process is gentler on many fabrics while still providing the deep cleaning
                                    power customers expect from professional dry cleaning. It also helps reduce exposure
                                    to the harsh chemicals commonly associated with older dry cleaning methods.</Body>
                            </div>
                        </div>

                        <img className={"hidden md:block md:right-12 md:top-24 absolute w-5/16 lg:object-contain"}
                             alt={"Clothes being carried to house, symbolizing trust"} src={dryCleanMachine}/>

                        <img className={"block md:hidden w-3/4 lg:w-2/4 lg:max-h-130 lg:object-contain"} alt={"Clothes being carried to house, symbolizing trust"} src={dryCleanMachine}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CleanerApproach;