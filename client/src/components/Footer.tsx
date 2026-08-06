import React from 'react';
import {NavLink} from "react-router-dom";
import Body from "./Body.tsx";
import ContactInfo from "./ContactInfo.tsx";
import {linkToAppleApp, linkToGoogleApp} from "../utils/links.ts";

import downloadAppStore from "../assets/appStore.svg.webp"
import downloadPlayStore from "../assets/playStore.svg.webp"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={"responsive-py responsive-px limit-size"}>
            <div className={"flex flex-col gap-8 md:grid-cols-2 md:grid lg:flex lg:flex-row lg:justify-around"}>
                <div className={"flex flex-col min-w-42.5"}>
                    <Body className={"font-semibold mb-1"}>Pages</Body>
                    <NavLink to={"/"} className={"hover:text-primary-500 hover:underline"}><Body>Home</Body></NavLink>
                    <NavLink to={"/services"} className={"hover:text-primary-500 hover:underline"}><Body>Services</Body></NavLink>
                    <NavLink to={"/about"} className={"hover:text-primary-500 hover:underline"}><Body>About</Body></NavLink>
                    <NavLink to={"/delivery"} className={"hover:text-primary-500 hover:underline"}><Body>Pickup and Delivery</Body></NavLink>
                    <NavLink to={"/delivery"} className={"hover:text-primary-500 hover:underline"}><Body>Contact Us</Body></NavLink>
                </div>

                <div className={"flex flex-col min-w-35"}>
                    <Body className={"font-semibold mb-1"}>Services</Body>


                    <NavLink to={"/dry-cleaning"} className={"hover:text-primary-500 hover:underline"}><Body>Dry Cleaning</Body></NavLink>
                    <NavLink to={"/laundry-shirts"} className={"hover:text-primary-500 hover:underline"}><Body>Laundry Shirts</Body></NavLink>

                    <NavLink to={"/wedding"} className={"hover:text-primary-500 hover:underline"}><Body>Wedding Dress</Body></NavLink>
                    <NavLink to={"/indian-garments"} className={"hover:text-primary-500 hover:underline"}><Body>Indian Garments</Body></NavLink>

                    <NavLink to={"/leather"} className={"hover:text-primary-500 hover:underline"}><Body>Leather</Body></NavLink>

                    <NavLink to={"/wash-and-fold"} className={"hover:text-primary-500 hover:underline"}><Body>Wash and Fold</Body></NavLink>
                    <NavLink to={"/household"} className={"hover:text-primary-500 hover:underline"}><Body>Household</Body></NavLink>
                    <NavLink to={"/shoes"} className={"hover:text-primary-500 hover:underline"}><Body>Shoes</Body></NavLink>
                </div>

                <div>
                    <Body className={"font-semibold mb-1"}>Contact</Body>
                    <ContactInfo/>
                </div>

                <div>
                    <Body className={"font-semibold mb-1"}>Download the Bizz Cleaners app</Body>
                    <div className={"flex flex-col gap-2"}>
                        <button onClick={linkToAppleApp} className={"cursor-pointer"}>
                            <img src={downloadAppStore} alt={"download the bizz cleaners app on iphone"}
                                 className={"max-w-42"}/>
                        </button>

                        <button onClick={linkToGoogleApp} className={"cursor-pointer"}>
                            <img src={downloadPlayStore} alt={"download the bizz cleaners app on android"}
                                 className={"max-w-42"}/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;