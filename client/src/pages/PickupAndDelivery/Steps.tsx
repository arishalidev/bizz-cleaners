import React from 'react';

import desk from "../../assets/deskWithComputer.png"
import home from "../../assets/home.png"
import cleaners from "../../assets/store.png"
import cleanClothes from "../../assets/cleanClothes.png"
import Step from "./Step.tsx";
import Headline from "../../components/Headline.tsx";

interface StepsProps {

}

const Steps: React.FC<StepsProps> = ({}) => {
    return (
        <div>
            <div className={" pt-10 pb-18 responsive-px limit-size-5xl responsive-py"}>

                <Headline>How pickup and delivery works</Headline>
                {/*<Body subtext={true}>*Pickup and delivery orders are subject to a $25 minimum order amount</Body>*/}

                <div className={"flex flex-col gap-12 mt-8 mx-auto"}>
                    <Step
                        headline={"1. Schedule your pickup"}
                        body={"Book a pickup through our online portal or mobile app. Choose the day that works best for your schedule."}
                        image={desk}
                        imageAlt={""}
                    />

                    <Step
                        headline={"2. Leave it by the door"}
                        body={"Place your Bizz Cleaners weatherproof bag by your front door on pickup day. There's no need to wait at home."}
                        image={home}
                        imageAlt={""}
                    />
                    <Step
                        headline={"3. We clean your garments"}
                        body={"Your items are cleaned, pressed, and inspected right here in our Flower Mound facility."}
                        image={cleaners}
                        imageAlt={""}
                    />

                    <Step
                        headline={"4. We deliver them back"}
                        body={"Most orders are returned within 48 hours, fresh, clean, and ready to wear."}
                        image={cleanClothes}
                        imageAlt={""}
                    />
                </div>
            </div>
        </div>
    );
};

export default Steps;