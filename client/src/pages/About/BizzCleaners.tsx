import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

import teamPortrait from "../../assets/teamPortrait.jpg"

interface BizzCleanersProps {

}

const BizzCleaners: React.FC<BizzCleanersProps> = ({}) => {
    return (
        <div className={"flex flex-col gap-5 px-4 bg-neutral-900 py-10"}>
            <SectionLabel className={"text-neutral-300"}>About Bizz Cleaners</SectionLabel>

            <img className={"rounded-md"} src={teamPortrait} alt={"Team Portrait of Bizz Cleaners staff."} />

            <div className={"flex flex-col gap-4"}>
                <Headline className={"text-neutral-50"}>More than just a dry cleaner</Headline>
                <Body className={"text-neutral-50"}>Bizz Cleaners is family-owned, and Flower Mound has been our home for 6 years now. We're proud to be part of this community — not just a stop on your errand list.<br/><br/>
                    We dry clean the eco-friendly way, which means gentler results for your clothes and fewer harsh chemicals left behind. From same-day turnaround to pickup and delivery, we try to make caring for your wardrobe as easy as possible — at a price that makes sense for a family business serving its neighbors.</Body>

            </div>
        </div>
    );
};

export default BizzCleaners;