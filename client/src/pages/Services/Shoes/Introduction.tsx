import React from 'react';
import weddingDress from "../../../assets/weddingDress.jpg";
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import Button from "../../../components/Button.tsx";
import {linkToCall, linkToDirections} from "../../../utils/links.ts";

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size-5xl pb-10 pt-6"}>

                <div className={"mr-auto pb-6 w-full"}>
                    <div className={"flex gap-8"}>
                        <Button className={"flex-1 md:flex-none md:w-56"} variant={"primary"} onClick={linkToCall}>Request a quote </Button>
                        <Button className={"flex-1 md:flex-none md:w-56"} variant={"other"} onClick={linkToDirections}>Find us</Button>

                    </div>
                </div>

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={weddingDress}
                     alt={"Leather jackets, nicely pressed."}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Helping you preserve the memories stitched into every dress</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>Your wedding dress is one of the most meaningful garments you'll ever own. Long after the
                            flowers are gone and the photographs are tucked away, your gown remains a reminder of one of
                            life's biggest celebrations.</Body>

                        <Body>Professional cleaning and preservation help keep your dress looking beautiful for years to
                            come. At Bizz Cleaners, every gown is cleaned and preserved in-house by an experienced team
                            that understands the care these garments require.</Body>

                        <Body>Nothing is sent to another facility, and every dress receives individual attention throughout
                            the cleaning process.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;