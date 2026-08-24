import React from "react"
import Headline from "./Headline.tsx";
import Button from "./Button.tsx";

import {linkToDirections} from "../utils/links.ts";
import HoursOfOperation from "./hoursOfOperation.tsx";
import ContactInfo from "./ContactInfo.tsx";
import Body from "./Body.tsx";


interface BusinessInfoProps {
    hoursOfOperation: string[],
    isOpen: boolean | undefined,
    ctaHeadline: string,
    ctaBody: string,
    primaryButtonLabel: string,
    primaryButtonAction: () => void,
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
    hoursOfOperation,
    isOpen,
    ctaHeadline,
    ctaBody,
    primaryButtonLabel,
    primaryButtonAction,
}: BusinessInfoProps) => {

    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col responsive-px limit-size-5xl responsive-py"}>
                <div>
                    <Headline>Find us in Flower Mound</Headline>
                </div>

                <div>
                    <div className={"overflow-hidden"}>
                        {/*<img src={businessInfo} alt={"Font of Bizz Cleaners store"}
                            className={"rounded-md drop-shadow-md object-cover aspect-7/4 object-[0%_15%] w-full"}/>*/}
                    </div>
                    <div className={"flex flex-col gap-2 md:gap-8 mt-6 mb-8 md:mb-10 md:justify-evenly md:grid md:grid-cols-2"}>
                        <div>
                            {isOpen === undefined ? (
                                <div></div>
                            ) : isOpen ? (
                                <h3 className={"font-semibold text-primary-500 text-lg"}>Open Now</h3>
                            ) : (
                                <h3 className={"font-semibold text-red-500"}>Closed</h3>
                            )}

                            <HoursOfOperation hoursOfOperation={hoursOfOperation}/>
                        </div>

                        <ContactInfo/>

                        <div className={"mt-8 md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2"}>
                            <iframe
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.564529369901!2d-97.07125436071318!3d33.01525459620687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d1f87b1e3d5%3A0xce319181104f911a!2sBizz%20Cleaners!5e0!3m2!1sen!2sus!4v1778693139746!5m2!1sen!2sus"}
                                allowFullScreen={true}
                                loading={"lazy"}
                                referrerPolicy={"no-referrer-when-downgrade"}
                                className={"h-96 md:h-112 w-full"}/>
                        </div>
                    </div>

                    <div className={"mt-12 lg:mt-16 flex flex-col gap-2 mb-6"}>
                        <Headline>{ctaHeadline}</Headline>
                        <Body subtext={true} className={"max-w-140"}>{ctaBody}</Body>
                    </div>

                    <div className={"mr-auto"}>
                        <div className={"flex gap-8"}>
                            <Button className={"flex-1 md:flex-none md:w-56"} onClick={primaryButtonAction}>{primaryButtonLabel}</Button>
                            <Button className={"flex-1 md:flex-none md:w-56"} variant={"other"} onClick={linkToDirections}>Find us</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;
