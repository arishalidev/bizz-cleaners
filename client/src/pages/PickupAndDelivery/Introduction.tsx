import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import vanAtFrontDoor from "../../assets/vanAtFrontDoor.jpg";
import Button from "../../components/Button.tsx";
import {linkToPortal} from "../../utils/links.ts";
import {HashLink} from "react-router-hash-link";

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
    <div className={"bg-white"}>
        <div className={"flex flex-col gap-5 responsive-px limit-size-5xl responsive-py"}>

            <div className={" -mt-4 flex gap-3"}>
                <Button className={" w-48 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule pickup </Button>
                <HashLink smooth to='/delivery/#service-area' className={""}>
                    <Button className={" w-48 md:flex-none md:w-56"} variant={"other"}> See our service area </Button>
                </HashLink>

            </div>

            <img className={"rounded-md mx-auto max-w-5xl w-full mt-4"} src={vanAtFrontDoor}
                 alt={"Delivery van at the front door of a beautiful house"}/>

            <div className={"mx-auto lg:mt-2 w-full"}>
                <Headline className={"my-4"}>Serving Flower Mound and the North DFW area</Headline>

                <div className={"flex-col flex gap-4 max-w-150"}>
                    <Body>Getting started is easy. Schedule a pickup through our website or mobile app, leave your
                        bag outside on pickup day, and we'll stop by to collect it.</Body>

                    <Body>Your clothes are cleaned right here in our Flower Mound store and delivered back to your door, usually within 48 hours. Because we handle our own pickups and deliveries, your garments stay in the care of the Bizz Cleaners team the entire time.</Body>
                </div>
            </div>
        </div>
    </div>

);
};

export default Introduction;