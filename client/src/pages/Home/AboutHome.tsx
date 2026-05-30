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
            <div className={"responsive-px limit-size responsive-py"}>
                <div>
                    <div className={"flex flex-col gap-3"}>
                            <SectionLabel>Our Story</SectionLabel>
                            <Headline className={"mt-1"}>A family business, three decades in the making</Headline>
                        <div className={"lg:flex lg:gap-8 lg:items-start mt-4"}>
                            <div className={"flex flex-col gap-4 min-w-110"}>
                                <Body>It started with one small shop in Bay City, Texas, back in 1996. Three decades
                                    later, we've run cleaners across the Houston area and as far north as Vancouver —
                                    and
                                    we've brought everything we've learned home to Flower Mound, where we've been proud
                                    to
                                    serve our neighbors for the last six years.</Body>
                                <Body>We're family-owned, and we treat your clothes the way we'd treat our own. We also
                                    clean the eco-friendly way: gentler on your favorite pieces, and lighter on the
                                    planet, with fewer harsh chemicals left behind.</Body>
                                <Body>From same-day turnaround to free pickup and delivery, we do everything we can to
                                    make caring for your wardrobe simple — at a price that makes sense for a family
                                    business looking after the people next door.</Body>
                                <Body>We're glad you're here.</Body>
                                <Body>— Farzana and Rehman</Body>
                            </div>
                            <div className={"max-h-175 lg:max-w-131.25"}>
                                <img src={ownersFriendly} alt={"Owners of Bizz Cleaners, a delightful couple."}
                                     className={"mt-8 lg:mt-0 rounded-md drop-shadow-md w-full object-cover h-160 object-[0%_20%] lg:object-contain lg:h-fit"}/>

                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;