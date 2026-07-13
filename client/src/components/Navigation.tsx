import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import {NavbarContext} from "../contexts/NavbarContext.tsx";

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {

    const navbarBgColor = "bg-neutral-800"

    const [isOpen, setIsOpen] = useState(false);
    const { scrolledPast, scrolledPastLg } = useContext(NavbarContext);

    function selectedOnMobileCss( params : { isActive: boolean }) : string {
        const isActive = params.isActive;
        const baseCss = "p-4 lg:rounded-md";

        if (isActive) {
            return baseCss + " bg-primary-500 text-white"
        } else {
            return baseCss + " hover:bg-primary-300"
        }
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    //CSS for when scrolled past hero
    const pastHeroCss = scrolledPast ? ` ${navbarBgColor} text-neutral-50 shadow-md` : " text-white"
    const pastHeroCssLg = scrolledPastLg ? ` ${navbarBgColor} lg:text-neutral-50 lg:shadow-md` : " text-white"


    return (
        <div className={"fixed z-50 w-full" + pastHeroCss + pastHeroCssLg}>

            <div className={`pointer-events-none fixed inset-x-0 top-0 z-5 h-20.5 bg-linear-to-b from-neutral-900/80 to-transparent transition-opacity duration-300 opacity-100`}></div>
            <nav className={"relative z-10 px-6 py-2 flex items-center limit-size"}>

                <Link to={"/"}>
                    <div className={"flex gap-2"} onClick={() => {setIsOpen(false)}}>
                        <img src={"/logo.png"} alt={"Bizz Cleaners Logo"} className={"w-14 lg:w-15"}/>
                        <div className={"font-semibold font-[Arial_Black] text-2xl lg:text-3xl italic mt-4.5 lg:mt-5 tracking-wide"}> CLEANERS</div>
                    </div>

                    <div className={"lg:text-lg text-neutral-50 font-[Arial] font-semibold"}>Dry Cleaning with Home Delivery </div>

                </Link>

                <button className={"ml-auto bg-primary-500 rounded-md text-neutral-900 size-11 flex items-center justify-center lg:hidden"} onClick={() => {setIsOpen(!isOpen)}}>
                    <MdMenu className={"text-2xl"}/>
                </button>

                <div className={"ml-auto hidden lg:flex lg:gap-2"}>
                    <NavLink to={"/"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                    <NavLink to={"/about"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>About</NavLink>
                    <NavLink to={"/delivery"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Pickup and Delivery</NavLink>
                    <NavLink to={"/contact"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Contact Us</NavLink>

                </div>
            </nav>


            {/* Mobile menu overlay */}
            <div className={`lg:hidden overflow-hidden absolute top-0 h-screen w-full bg-neutral-50 text-neutral-900 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className={`h-[90px] lg:h-[100px] bg ${navbarBgColor}`}></div>
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