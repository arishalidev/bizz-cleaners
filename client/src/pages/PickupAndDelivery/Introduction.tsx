import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import {HashLink} from "react-router-hash-link";
import {GoArrowRight} from "react-icons/go";
import businessInfo from "../../assets/businessInfo.jpg";
import SectionLabel from "../../components/SectionLabel.tsx";

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
        <div className={"px-4 pt-3 pb-8"}>
            <SectionLabel>Pickup and Delivery Service </SectionLabel>
            <Headline className={"mt-4"}>Skip the trip. We'll come to you.</Headline>
            <Body className={"mt-2"}>Between work, school drop-offs, and the dog who somehow always needs something — driving to the cleaners shouldn't be one more thing on your list. We've spent the last six years picking up and dropping off across North DFW, including [Neighborhood names].<br/>
                <HashLink smooth to='/delivery/#service-area'  className={"inline-flex items-center h-full gap-1 text-primary-600 font-semibold relative"}>See if we're in your area<GoArrowRight/>
                    <div className={"absolute h-1 bg-purple-200 w-full bottom-0.5"}></div>
                </HashLink>

                <br/><br/>
                And here's the part we're proud of: the people who clean your clothes are the same people who hand them back to you. No middlemen, no third-party drivers. Just our team, treating every shirt, suit, and sequined dress like it belongs to a neighbor — because it does.
            </Body>

            <img src={businessInfo} alt={"Font of Bizz Cleaners store"} className={"rounded-md drop-shadow-md my-8 object-cover h-96"}/>
        </div>

    );
};

export default Introduction;