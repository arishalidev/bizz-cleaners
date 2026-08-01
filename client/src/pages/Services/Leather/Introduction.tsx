import React from 'react';
import leatherJackets from "../../../assets/leatherJackets.jpg";
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import Button from "../../../components/Button.tsx";
import {linkToDirections, linkToPortal} from "../../../utils/links.ts";

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size-5xl pb-10 pt-6"}>

                <div className={"mr-auto pb-6 w-full"}>
                    <div className={"flex gap-8"}>
                        <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule collection </Button>
                        <Button className={"flex-1 md:flex-none md:w-56"} variant={"other"} onClick={linkToDirections}>Find us</Button>
                    </div>
                </div>

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={leatherJackets}
                     alt={"Leather jackets, nicely pressed."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Keep your favorite leather pieces looking their best</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>A good leather jacket can stay in your closet for years. The same goes for leather coats,
                            skirts, pants, and other pieces you reach for season after season.</Body>
                        <Body>Over time, leather can pick up dirt, oils, and everyday wear that take away from its
                            appearance. Cleaning it properly helps keep it looking sharp and ready to wear.</Body>
                        <Body>At Bizz Cleaners, every leather garment is cleaned individually. We take the time to look at
                            the color, condition, and type of leather before deciding on the best cleaning process. It's
                            a little more work, but leather isn't something you want rushed through a machine.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;