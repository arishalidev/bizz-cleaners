import React from 'react';
import foldedClothes from "../../../assets/foldedClothes.jpg";
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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={foldedClothes}
                     alt={"Folded shirts in an orderly stack."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Fresh, folded, and ready to put away</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>Laundry has a way of piling up. Between work, family, and everything else going on during the
                            week, it can be hard to find the time to keep up with it all.</Body>
                        <Body>Our wash and fold service is a simple way to take laundry off your to-do list.</Body>
                        <Body>Just drop off your clothes in one of our wash and fold bags, and we'll take care of the rest.
                            Your items are sorted, washed, dried, neatly folded, and packaged for pickup or delivery.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;