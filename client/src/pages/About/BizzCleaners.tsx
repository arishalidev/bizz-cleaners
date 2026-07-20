import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

interface BizzCleanersProps {

}

const BizzCleaners: React.FC<BizzCleanersProps> = ({}) => {
    return (
        <div className={"bg-neutral-900"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size py-10"}>
                <div className={"w-full mx-auto"}>
                    <SectionLabel className={"text-neutral-300"}>About Bizz Cleaners</SectionLabel>
                </div>

                <div className={"mt-4 flex flex-col gap-4 mx-auto max-w-5xl text-white w-full"}>
                    <Headline>More than just a dry cleaner</Headline>
                    <Body className={"max-w-150"} >Bizz Cleaners is family-owned, and Flower Mound has been our home for 6 years now. We're proud
                        to be part of this community — not just a stop on your errand list.</Body>
                    <Body className={"max-w-150"}>We dry clean the eco-friendly way, which means gentler results for your clothes and fewer
                        harsh chemicals left behind. From same-day turnaround to pickup and delivery, we try to make
                        caring for your wardrobe as easy as possible — at a price that makes sense for a family business
                        serving its neighbors.</Body>
                </div>
            </div>
        </div>
    );
};

export default BizzCleaners;