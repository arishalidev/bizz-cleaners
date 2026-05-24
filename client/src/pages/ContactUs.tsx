import React from "react"
import Button from "../components/Button.tsx";

import {linkToCall, linkToDirections} from "../utils/links.ts";
import HoursOfOperation from "../components/hoursOfOperation.tsx";
import ContactInfo from "../components/ContactInfo.tsx";
import SecondaryHero from "../components/SecondaryHero.tsx";
import Body from "../components/Body.tsx";


interface ContactUsProps {
    hoursOfOperation: string[],
}

const ContactUs: React.FC<ContactUsProps> = ({ hoursOfOperation } : ContactUsProps) => {

    return (
        <>
            <SecondaryHero header={"Contact Us"}></SecondaryHero>
            <div className={"bg-white"}>
                <div className={"flex flex-col gap-6 responsive-px limit-size responsive-py"}>
                    <div className={"max-w-6xl w-full mx-auto md:mt-4"}>
                        <div
                            className={"flex flex-col gap-2 lg:flex-row md:gap-4 mt-6 mb-8 md:mb-10 md:justify-evenly md:grid md:grid-cols-2 lg:w-9/10 lg:mx-auto lg:justify-around"}>

                            <div>
                                <Body className={"font-semibold"}>Contact Information</Body>
                                <ContactInfo/>
                            </div>

                            <div className={"md:mt-6"}>
                                <Body className={"font-semibold mb-3"}>Hours of Operation</Body>
                                <div>
                                    <HoursOfOperation hoursOfOperation={hoursOfOperation}/>
                                </div>
                            </div>

                            <div className={" mt-8  md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2 lg:flex-1"}>
                                <iframe
                                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.564529369901!2d-97.07125436071318!3d33.01525459620687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d1f87b1e3d5%3A0xce319181104f911a!2sBizz%20Cleaners!5e0!3m2!1sen!2sus!4v1778693139746!5m2!1sen!2sus"}
                                    allowFullScreen={true}
                                    loading={"lazy"}
                                    referrerPolicy={"no-referrer-when-downgrade"}
                                    className={"min-h-96 md:min-h-112 lg:min-h-124 h-full w-full"}/>
                            </div>
                        </div>

                        <div className={"md:max-w-19/28 mx-auto"}>
                            <div className={"flex gap-8 mt-6"}>
                                <Button className={"flex-1 outline-2"} variant={"primary"} onClick={linkToCall}>Call
                                    Us</Button>
                                <Button className={"flex-1 outline-2"} variant={"secondary"} onClick={linkToDirections}>Get
                                    Directions</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;