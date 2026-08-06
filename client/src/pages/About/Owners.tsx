import React from 'react';
import Body from "../../components/Body.tsx";
import ownersFriendly from "../../assets/owners.jpg"
import Headline from "../../components/Headline.tsx";

interface CleanerApproachProps {

}

const Owners: React.FC<CleanerApproachProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"relative max-w-6xl mx-auto h-fit"}>
                <div className={"responsive-px max-w-5xl md:aspect-3/2 mx-auto responsive-py"}>
                    <div className={"flex flex-col lg:flex-row gap-5"}>
                        <div>
                            <Headline>A family business, 30 years in the making</Headline>
                            <div className={"flex-col flex gap-3 mt-8 md:max-w-3/5"}>
                                <Body>When we first got into the dry cleaning business 30 years ago, our goal was to take
                                    care of people and do great work at a fair price.</Body>
                                <Body>What started with a small cleaner in Bay City, Texas eventually led us to operate
                                    stores across the Houston area and even in Vancouver, Canada. Six years ago, we
                                    brought everything we'd learned along the way to Flower Mound, and we've been proud
                                    to serve this community ever since.</Body>
                                <Body>As a family-owned business, we know trust isn't something you can advertise – it's
                                    something you earn. That's why every garment is cleaned in-house, inspected before
                                    it leaves our store, and treated with the same care we'd want for our own
                                    clothes.</Body>
                                <Body>If you're stopping in for same-day service, scheduling pickup and delivery, or
                                    bringing us something that needs a little extra attention, we're grateful you've
                                    chosen us.</Body>
                                <Body>We look forward to serving you.</Body>
                            </div>
                        </div>

                        <img className={"hidden md:block md:right-12 md:top-24 absolute w-5/16 mt-4 lg:object-contain"}
                             alt={"Clothes being carried to house, symbolizing trust"} src={ownersFriendly}/>

                        <img className={"block md:hidden w-3/4 lg:w-2/4 lg:max-h-130 lg:object-contain"} alt={"Clothes being carried to house, symbolizing trust"} src={ownersFriendly}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;