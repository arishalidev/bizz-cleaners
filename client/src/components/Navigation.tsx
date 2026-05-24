import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {

    const [isOpen, setIsOpen] = useState(false);

    function selectedOnMobileCss( params : { isActive: boolean }) : string {
        const isActive = params.isActive;
        const baseCss = "p-4 lg:rounded-md";

        if(isActive) {
            return baseCss + " bg-primary-500 text-white"
        } else {
            return baseCss + " hover:bg-primary-300"
        }
    }

    return (
        <div className={"fixed z-50 w-full bg-neutral-50 "}>
            <nav className={"relative z-10 px-3 py-2 flex items-center"}>

                <Link to={"/"}><img src={"/logo.png"} alt={"Bizz Cleaners Logo"} className={"w-15"} onClick={() => {setIsOpen(false)}}/></Link>
                <button className={"ml-auto lg:hidden"} onClick={() => {setIsOpen(!isOpen)}}>
                    <MdMenu className={"text-5xl"}/>
                </button>

                <div className={"ml-auto hidden lg:flex lg:gap-2"}>
                    <NavLink to={"/"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                    <NavLink to={"/about"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>About</NavLink>
                    <NavLink to={"/delivery"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Pickup and Delivery</NavLink>
                    <NavLink to={"/contact"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Contact Us</NavLink>


                </div>
            </nav>


            <div className={`lg:hidden absolute top-0 h-screen w-full bg-neutral-50 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className={"absolute bottom-0"}>
                    <div className={"text-3xl pb-8"}>
                        <nav className={"flex flex-col"}>
                            <NavLink to={"/"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                            <hr className={"text-primary-500"}/>
                            <NavLink to={"/about"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>About</NavLink>
                            <hr className={"text-primary-500"}/>
                            <NavLink to={"/delivery"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Pickup and Delivery</NavLink>
                            <hr className={"text-primary-500"}/>
                            <NavLink to={"/contact"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Contact Us</NavLink>
                            <hr className={"text-primary-500"}/>
                        </nav>
                    </div>
                    <div className={"w-screen h-2 bg-primary-500"}></div>
                </div>
            </div>

        </div>

    );
};

export default Navigation;