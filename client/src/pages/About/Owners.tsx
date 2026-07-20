import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import teamPortrait from "../../assets/teamPort.jpg";

interface OwnersProps {

}

const Owners: React.FC<OwnersProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size-5xl py-10"}>

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={teamPortrait}
                     alt={"Team Portrait of Bizz Cleaners staff."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <div className={"mt-4 max-w-5xl mx-auto w-full flex-col flex gap-4"}>
                        <Headline>A family business built on doing things the right way</Headline>

                        <Body className={"max-w-150"}>Bizz Cleaners didn't start in Flower Mound. Our story began in 1996 with a small dry cleaning store in Bay City, Texas..</Body>

                        <Body className={"max-w-150"}>Over the years, we expanded throughout the Houston area, operated a store in Vancouver, Canada, and learned a lot about what customers expect from a cleaner they can trust. Six years ago, we brought that experience to Flower Mound, where we've been proud to serve local families, professionals, and businesses ever since.</Body>
                        <Body className={"max-w-150"}>The locations may have changed over the years, but the way we do business hasn't. We believe in treating people fairly, doing quality work, and standing behind every garment that comes through our doors.</Body>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;