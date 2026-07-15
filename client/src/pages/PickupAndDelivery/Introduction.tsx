import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import {HashLink} from "react-router-hash-link";
import {GoArrowRight} from "react-icons/go";
import businessInfo from "../../assets/storefront.jpg";
import SectionLabel from "../../components/SectionLabel.tsx";

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
        <div className={"responsive-px limit-size pt-3 pb-8"}>
            <SectionLabel>Pickup and Delivery Service </SectionLabel>
            <Headline className={"mt-2"}>Skip the trip. We'll come to you.</Headline>
            <div className={"my-4"}>
                <Body className={"mt-2 max-w-150"}>Between work, school drop-offs, and the dog who somehow always needs something —
                driving to the cleaners shouldn't be one more thing on your list. We've spent the last six years picking
                up and dropping off across North DFW, including [Neighborhood names].
            </Body>
                <HashLink smooth to='/delivery/#service-area'
                          className={"inline-flex items-center h-full gap-1 text-primary-600 font-semibold relative text-[18px]/8"}>
                    See if we're in your area<GoArrowRight/>
                    <div className={"absolute h-1 bg-purple-200 w-full bottom-1"}></div>
                </HashLink>
            </div>

            <Body className={"max-w-150"}>
                And here's the part we're proud of: the people who clean your clothes are the same people who hand them back to you. No middlemen, no third-party drivers. Just our team, treating every shirt, suit, and sequined dress like it belongs to a neighbor — because it does.
            </Body>

            <div className={"w-full"}>
                <img src={businessInfo} alt={"Font of Bizz Cleaners store"}
                    className={"rounded-md drop-shadow-md my-8 object-cover min-h-96"}/>
            </div>
        </div>

    );
};

export default Introduction;