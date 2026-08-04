import React from 'react';
import shoes from "../../../assets/shoes.jpg";
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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={shoes}
                     alt={"Clean shoes stacked on top of each other"}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>A little care goes a long way</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>A good pair of shoes can take you a long way. From dress shoes and boots to everyday
                            footwear, regular cleaning can help keep them looking their best and ready for whatever
                            comes next.</Body>

                        <Body>At Bizz Cleaners, we offer professional shoe cleaning services for a variety of materials and
                            styles. Before any cleaning begins, we take a close look at the shoe's material,
                            construction, and overall condition.</Body>

                        <Body>After all, no two pairs are exactly the same.</Body>

                        <Body>Leather, suede, canvas, and specialty materials often require different cleaning methods,
                            which is why we don't take a one-size-fits-all approach.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;