import React from 'react';
import householdItems from "../../../assets/foldedBlankets.jpg";
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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={householdItems}
                     alt={"Leather jackets, nicely pressed."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Fresh, clean, and ready for home</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>Some household items are difficult to clean at home. Comforters can be too large for standard
                            washing machines, pillows don't always dry properly, and curtains can be a hassle to take
                            down, clean, and rehang. </Body>

                        <Body>That's where we can help.</Body>

                        <Body>At Bizz Cleaners, we clean a variety of household items, including comforters, blankets,
                            pillows, curtains, and stuffed animals. Using our oversized machines, we're able to
                            thoroughly clean and dry larger items while giving them the attention they need.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;