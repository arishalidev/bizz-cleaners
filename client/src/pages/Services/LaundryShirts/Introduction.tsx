import React from 'react';
import shirts from "../../../assets/LaundryShirts.jpg";
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import Button from "../../../components/Button.tsx";
import {linkToDirections, linkToPortal} from "../../../utils/links.ts";

import shirtPressed from "../../../assets/shirtPressed.jpg";
import shirtInspected from "../../../assets/shirtInspected.jpg";

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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={shirts}
                     alt={"Dress shirts cleaned and pressed, hanging in a row"}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>One less thing to worry about during the week</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>A lot of our customers bring in the same stack of dress shirts every week.</Body>

                        <Body>They want the collars clean, the wrinkles gone, the buttons intact, and the shirts ready
                            when promised. Nothing complicated – just a job done right.</Body>

                        <Body>That's exactly what we focus on.</Body>

                        <Body>Every shirt is cleaned, pressed, inspected, and finished by our team before it's
                            returned to you. From business shirts worn every day to shirts saved for special
                            occasions, we take the time to make sure they look their best.</Body>
                    </div>
                </div>

                <div className={"flex flex-col md:flex-row gap-4"}>
                    <div>
                        <img className={"rounded-md"} src={shirtPressed}
                             alt={"Dress shirt being pressed"}/>
                    </div>

                    <div>
                        <img className={"rounded-md"} src={shirtInspected}
                             alt={"Dress shirt being inspected"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
