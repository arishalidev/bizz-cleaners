import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import dryers from "../../../assets/oversizedDryer.jpg";

interface WhyItHelpsProps {

}

const WhyItHelps: React.FC<WhyItHelpsProps> = ({}) => {
    return (
        <div className={"-mt-8 md:-mt-16"}>
            <div className={"relative max-w-6xl mx-auto h-fit"}>
                <div className={"responsive-px max-w-5xl md:aspect-3/2 mx-auto responsive-py"}>
                    <div className={"flex flex-col lg:flex-row gap-5"}>
                        <div>
                            <Headline className={"my-4"}>Why professional cleaning helps</Headline>
                                <div className={"flex-col flex gap-3 mt-8 md:max-w-3/5"}>
                                    <Body>Regular cleaning helps freshen your home, keep bedding feeling comfortable, and maintain the
                                        appearance of items that are used every day.</Body>

                                    <Body>Different materials require different care, which is why down comforters, feather-filled bedding,
                                        and other specialty items are processed according to their specific needs.</Body>
                            </div>
                        </div>

                        <img className={"hidden md:block md:right-12 md:top-24 absolute w-5/16 lg:object-contain"}
                             alt={"Oversized dryers, used to thoroughly dry household items while keeping them fresh and fluffy."} src={dryers}/>

                        <img className={"block md:hidden w-3/4 lg:w-2/4 lg:max-h-130 lg:object-contain"} alt={"Oversized dryers, used to thoroughly dry household items while keeping them fresh and fluffy."} src={dryers}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyItHelps;