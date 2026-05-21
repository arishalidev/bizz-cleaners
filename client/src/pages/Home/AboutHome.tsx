import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import ownersFriendly from "../../assets/ownersFriendly.jpeg"
import SectionLabel from "../../components/SectionLabel.tsx";
interface AboutHomeProps {

}

const AboutHome: React.FC<AboutHomeProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"responsive-px limit-size responsive-py min-[900px]:flex"}>
                <div>
                    <div className={"flex gap-3"}>
                        <div className={"w-2 h-auto bg-primary-500"}></div>
                        <div className={"w-fit"}>
                            <SectionLabel dot={false}>Our Story</SectionLabel>
                            <Headline className={"mb-3"}>A family business, three decades in the making</Headline>
                            <div className={"flex flex-col gap-4"}>
                                <Body>It started with one small shop in Bay City, Texas, back in 1996. Three decades
                                later, we've run cleaners across the Houston area and as far north as Vancouver — and
                                we've brought everything we've learned home to Flower Mound, where we've been proud to
                                serve our neighbors for the last six years.</Body>
                                <Body>We're family-owned, and we treat your clothes the way we'd treat our own. We also
                                    clean the eco-friendly way: gentler on your favorite pieces, and lighter on the
                                    planet, with fewer harsh chemicals left behind.</Body>
                                <Body>From same-day turnaround to free pickup and delivery, we do everything we can to
                                    make caring for your wardrobe simple — at a price that makes sense for a family
                                    business looking after the people next door.</Body>
                                <Body>We're glad you're here.</Body>
                                <Body>— F and R</Body></div>
                        </div>
                    </div>
                </div>
                <img src={ownersFriendly} alt={"Owners of Bizz Cleaners, a delightful couple."}
                     className={"mt-6 rounded-md drop-shadow-md w-5/6 object-contain max-w-sm ml-5 md:w-3/4 lg:max-w-lg"}/>
            </div>
        </div>
    );
};

export default AboutHome;