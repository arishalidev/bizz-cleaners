import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";

import step1 from "../../assets/deskWithComputer.png"
import step2 from "../../assets/deliveryVan.png"
import step3 from "../../assets/cleanClothes.png"
import Step from "./Step.tsx";

interface StepsProps {

}

const Steps: React.FC<StepsProps> = ({}) => {
    return (
        <div className={" pt-10 pb-18 px-4 bg-neutral-900"}>
            <SectionLabel className={"text-white"}>How It Works</SectionLabel>

            <div className={"flex flex-col gap-18"}>
                <Step
                    headline={"1. Schedule your pickup"}
                    body={"Pick a time and spot that works for your life — front porch, side gate, apartment lobby. Add a note for stains, starch, or anything special. The whole thing takes less than a minute through our [online portal]."}
                    image={step1}
                    imageAlt={""}
                />

                <Step
                    headline={"2. Leave it by the door"}
                    body={"Pick a time and spot that works for your life — front porch, side gate, apartment lobby. Add a note for stains, starch, or anything special. The whole thing takes less than a minute through our [online portal].\n"}
                    image={step2}
                    imageAlt={""}
                />
                <Step


                    headline={"3. Get it back fresh"}
                    body={"Your clothes come back cleaned, pressed, and hung with care — usually within 48 hours. Sit back, pour the coffee, and enjoy a closet that did itself.\n"}
                    image={step3}
                    imageAlt={""}
                />
            </div>
        </div>
    );
};

export default Steps;