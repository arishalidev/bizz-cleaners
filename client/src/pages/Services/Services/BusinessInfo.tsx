import React from "react"
import Headline from "../../../components/Headline.tsx";
import Button from "../../../components/Button.tsx";

import {linkToDirections, linkToPortal} from "../../../utils/links.ts";
import HoursOfOperation from "../../../components/hoursOfOperation.tsx";
import ContactInfo from "../../../components/ContactInfo.tsx";
import Body from "../../../components/Body.tsx";


interface BusinessInfoProps {
    hoursOfOperation: string[],
    isOpen: boolean | undefined
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ hoursOfOperation, isOpen } : BusinessInfoProps) => {

    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-6 responsive-px limit-size-5xls responsive-py"}>
                <div>
                    <Headline>We're here when you need us</Headline>
                    <Body subtext={true} className={"mt-2 max-w-110"}>From everyday clothes to garments that need extra care, you can count on us to
                        get the job done right.</Body>
                </div>

                <div className={"md:mt-4"}>
                    <div className={"overflow-hidden"}>
                        {/*<img src={businessInfo} alt={"Font of Bizz Cleaners store"}
                            className={"rounded-md drop-shadow-md object-cover aspect-7/4 object-[0%_15%] w-full"}/>*/}
                    </div>
                    <div className={"flex flex-col gap-2 lg:flex-row min-[1175px]:flex md:gap-8 lg:gap-10 mt-6 mb-8 md:mb-10 md:justify-evenly md:grid md:grid-cols-2 lg:mx-auto lg:justify-around"}>
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

                        <div className={"mt-8 md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2 lg:flex-1"}>
                            <iframe
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.564529369901!2d-97.07125436071318!3d33.01525459620687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d1f87b1e3d5%3A0xce319181104f911a!2sBizz%20Cleaners!5e0!3m2!1sen!2sus!4v1778693139746!5m2!1sen!2sus"}
                                allowFullScreen={true}
                                loading={"lazy"}
                                referrerPolicy={"no-referrer-when-downgrade"}
                                className={"h-96 md:h-112 w-full"}/>
                        </div>
                    </div>
                    <div className={"mr-auto"}>
                        <div className={"flex gap-8"}>
                            <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule collection </Button>
                            <Button className={"flex-1 md:flex-none md:w-56"} variant={"other"} onClick={linkToDirections}>Find us</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;