import React from "react"
import businessInfo from "../../assets/businessInfo.jpg"
import Headline from "../../components/Headline.tsx";
import Button from "../../components/Button.tsx";
import Body from "../../components/Body.tsx";
import SectionLabel from "../../components/SectionLabel.tsx";

import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { PiStorefront } from "react-icons/pi";
import {linkToDirections, linkToPortal} from "../../utils/links.ts";


interface BusinessInfoProps {
    hoursOfOperation: string[],
    isOpen: boolean | undefined
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ hoursOfOperation, isOpen } : BusinessInfoProps) => {

    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-6 responsive-px limit-size responsive-py"}>
                <SectionLabel>Business Information</SectionLabel>
                <Headline>Visit Us Today</Headline>
                <div className={"max-w-6xl mx-auto md:mt-4"}>
                    <img src={businessInfo} alt={"Font of Bizz Cleaners store"}
                         className={"rounded-md drop-shadow-md lg:w-9/10 mx-auto"}/>
                    <div className={"flex flex-col gap-2 lg:flex-row min-[1175px]:flex md:gap-8 lg:gap-10 mt-6 mb-8 md:mb-10 md:justify-evenly md:grid md:grid-cols-2 lg:w-9/10 lg:mx-auto lg:justify-around"}>
                        <div>
                            {isOpen === undefined ? (
                                <div></div>
                            ) : isOpen ? (
                                <h3 className={"font-semibold text-primary-500 text-lg"}>Open Now</h3>
                            ) : (
                                <h3 className={"font-semibold text-red-500"}>Closed</h3>
                            )}

                            <div className={"flex gap-4 mt-2 w-fit"}>
                                <div className={"flex flex-col"}>
                                    {hoursOfOperation.map((day, i) =>
                                        <div key={i} className={"flex flex-col"}>
                                            {(((new Date().getDay() + 6) % 7)) === i ? (
                                                <Body className={"font-semibold"}>{day.split(":")[0]}</Body>
                                            ) : (
                                                <Body>{day.split(":")[0]}</Body>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className={"flex flex-col"}>
                                    {hoursOfOperation.map((day, i) =>
                                        <div key={i} className={"flex flex-col"}>
                                            {(((new Date().getDay() + 6) % 7)) === i ? (
                                                <Body
                                                    className={"font-semibold"}>{day.slice(day.indexOf(":") + 1)}</Body>
                                            ) : (
                                                <Body>{day.slice(day.indexOf(":") + 1)}</Body>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={"flex flex-col gap-2 mt-4 w-fit"}>

                            <a href={"tel:+19723551807"} className={"inline-flex gap-4"}>
                                <span className={"text-2xl mt-1"}><IoCallOutline/></span>
                                <Body>+1 972-355-180</Body>
                            </a>

                            <a href={"mailto:business@bizzclean.com"} className={"inline-flex gap-4"}>
                                <span className={"text-2xl mt-1"}><IoMailOutline/></span>
                                <Body>business@bizzclean.com</Body>
                            </a>


                            <a href={"https://maps.app.goo.gl/92ihpSMbvt3e5YLK6"} className={"inline-flex gap-4"}>
                                <span className={"text-2xl mt-1"}><PiStorefront/></span>
                                <div>
                                    <Body>2201 Long Prairie Rd</Body>
                                    <Body> Flower Mound, TX 75022</Body>
                                </div>
                            </a>


                        </div>

                        <div className={" mt-8  md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2 lg:flex-1"}>
                            <iframe
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.564529369901!2d-97.07125436071318!3d33.01525459620687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d1f87b1e3d5%3A0xce319181104f911a!2sBizz%20Cleaners!5e0!3m2!1sen!2sus!4v1778693139746!5m2!1sen!2sus"}
                                allowFullScreen={true}
                                loading={"lazy"}
                                referrerPolicy={"no-referrer-when-downgrade"}
                                className={"h-96 md:h-112 lg:h-124 w-full"}/>
                        </div>
                    </div>

                    <div className={"md:max-w-19/28 mx-auto"}>
                        <div className={"flex gap-8 mt-6"}>
                            <Button className={"flex-1"} onClick={linkToPortal}>Schedule Pickup</Button>
                            <Button className={"flex-1 outline-2"} variant={"secondary"} onClick={linkToDirections}>Get Directions</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;