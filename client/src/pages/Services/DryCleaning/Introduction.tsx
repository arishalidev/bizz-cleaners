import React from 'react';
import dryCleaning from "../../../assets/suitsDryCleaned.jpg";
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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={dryCleaning}
                     alt={"Team Portrait of Bizz Cleaners staff."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Serving Flower Mound and the North DFW area</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>Some clothes need a little more than a trip through the washing machine.</Body>
                        <Body>Dry cleaning helps protect delicate fabrics, maintain the shape of your garments, and remove stains that traditional washing often can't. No matter if it's a business suit, dress pants, a favorite blouse, or a special occasion outfit, our team takes the time to clean each item properly.</Body>
                        <Body>Every garment is cleaned and inspected in-house by our experienced team. Nothing is sent to another facility, and every item is checked before it's returned to you.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;