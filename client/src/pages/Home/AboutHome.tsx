import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import ownersFriendly from "../../assets/ownersFriendly.jpeg"
import SectionLabel from "../../components/SectionLabel.tsx";
interface AboutHomeProps {

}

const AboutHome: React.FC<AboutHomeProps> = ({}) => {
    return (
        <div className={"bg-white responsive-px limit-size responsive-py"}>
            <div className={"flex gap-3"}>
                <div className={"w-2 h-auto bg-primary-500"}></div>
                <div className={"w-fit"}>
                    <SectionLabel dot={false}>Our Story</SectionLabel>
                    <Headline className={"mb-3"}>Our Story Headline</Headline>
                    <Body>We have operated as a family owned and operated business for over 25 years, and we take pride in doing things the right way, whether that’s treating your garments with the upmost care or getting your clothes to you on time.</Body>
                </div>
            </div>

            <img src={ownersFriendly} alt={"Owners of Bizz Cleaners, a delightful couple."} className={"mt-6 rounded-md drop-shadow-md w-5/6 ml-5"}/>

        </div>
    );
};

export default AboutHome;