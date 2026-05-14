import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {

    const [isOpen, setIsOpen] = useState(false);

    function selectedOnMobileCss( params : { isActive: boolean }) : string {
        const isActive = params.isActive;
        const baseCss = "p-4";

        if(isActive) {
            return baseCss + " bg-primary-500 text-white"
        } else {
            return baseCss + " hover:bg-primary-300"
        }
    }

    return (
        <div className={"fixed z-50 w-full bg-neutral-50"}>
            <nav className={"relative z-10 px-3 py-2 flex items-center"}>

                <Link to={"/"}><img src={"/logo.png"} alt={"Bizz Cleaners Logo"} className={"w-15"} onClick={() => {setIsOpen(false)}}/></Link>
                <button className={"ml-auto"} onClick={() => {setIsOpen(!isOpen)}}>
                    <MdMenu className={"text-5xl"}/>
                </button>
            </nav>

            {isOpen && (
                <div className={"absolute top-0 h-screen w-full bg-neutral-50"}>
                    <div className={"absolute bottom-0"}>
                        <div className={"text-3xl pb-8"}>
                            <nav className={"flex flex-col"}>
                                <NavLink to={"/"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Home</NavLink>
                                <hr className={"text-primary-500"}/>
                                <NavLink to={"/about"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>About</NavLink>
                                <hr className={"text-primary-500"}/>
                                <NavLink to={"/delivery"} className={selectedOnMobileCss} onClick={() => {setIsOpen(false)}}>Pickup and Delivery</NavLink>
                                <hr className={"text-primary-500"}/>
                            </nav>
                        </div>
                        <div className={"w-screen h-2 bg-primary-500"}></div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Navigation;