import React from 'react';
import indianGarments from "../../../assets/indianGarments.jpg";
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

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={indianGarments}
                     alt={"Indian sarees and garments, cleaned and pressed"}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>Care for the garments that mean the most</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        <Body>Indian garments are often some of the most detailed pieces in a wardrobe. From silk
                            sarees and lehengas to sherwanis and embroidered outfits, these garments are made with
                            fabrics and craftsmanship that deserve a little extra attention.</Body>

                        <Body>We've cleaned and pressed Indian garments for many years, and we understand that each
                            piece is different. Some have delicate beadwork, others feature intricate zari or
                            embroidery, and many are made from fabrics that require special handling from start to
                            finish.</Body>

                        <Body>That's why we take the time to inspect every garment before cleaning begins.</Body>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
