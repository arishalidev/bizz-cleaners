import React from 'react';
import {IoCallOutline, IoMailOutline} from "react-icons/io5";
import Body from "./Body.tsx";
import {PiStorefront} from "react-icons/pi";

interface ContactInfoProps {

}

const ContactInfo: React.FC<ContactInfoProps> = ({}) => {
    return (
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
    );
};

export default ContactInfo;