import React from 'react';
import {NavLink} from "react-router-dom";
import Body from "./Body.tsx";
import HoursOfOperation from "./hoursOfOperation.tsx";
import ContactInfo from "./ContactInfo.tsx";

interface FooterProps {
    hoursOfOperation: string[],
}

const Footer: React.FC<FooterProps> = ({hoursOfOperation} : FooterProps) => {
    return (
        <div className={"responsive-py responsive-px limit-size"}>
            <div className={"flex flex-col gap-8"}>
                <div className={"flex flex-col"}>
                    <Body className={"font-semibold mb-1"}>Pages</Body>
                    <NavLink to={"/"} className={"hover:text-primary-500 hover:underline"}><Body>Home</Body></NavLink>
                    <NavLink to={"/about"} className={"hover:text-primary-500 hover:underline"}><Body>About</Body></NavLink>
                    <NavLink to={"/delivery"} className={"hover:text-primary-500 hover:underline"}><Body>Pickup and Delivery</Body></NavLink>
                </div>

                <div>
                    <Body className={"font-semibold"}>Hours Of Operation</Body>
                    <HoursOfOperation hoursOfOperation={hoursOfOperation}/>
                </div>

                <div>
                    <Body className={"font-semibold mb-1"}>Contact</Body>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    );
};

export default Footer;