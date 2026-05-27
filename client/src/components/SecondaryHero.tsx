import React, {useEffect} from 'react';
import heroImage from "../assets/hero-image.jpg";
import { NavbarContext } from "../contexts/NavbarContext.tsx"
import {useContext, useRef } from "react";

interface SecondaryHeroProps {
    header: string,
    subHeader?: string,
    cta?: React.ReactNode,
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({header, subHeader = "", cta} : SecondaryHeroProps) => {

    const { setScrolledAny, setScrolledPast } = useContext(NavbarContext)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const hero = heroRef.current;
        if(!hero) return;

        const update = () => {
            const bottom = hero.getBoundingClientRect().bottom;
            setScrolledAny(window.scrollY > 0);
            setScrolledPast(bottom <= 70);
        }

        update();
        window.addEventListener("scroll", update, {passive: true});
        return () => window.removeEventListener("scroll", update)
    }, []);
    return (
        <div className={"relative overflow-hidden max-h-72"} ref={ heroRef}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"block w-full object-cover min-h-105"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"responsive-px limit-size"}>
                <div className={"absolute top-18 text-white space-y-2"}>
                    <h1 className={"text-3xl font-semibold w-80 md:w-full"}>{header}</h1>
                    <h2 className={"text-xl font-normal w-100 mt-6"}>{subHeader}</h2>
                    {<div className={"mt-8"}>{cta}</div>}
                </div>
            </div>
        </div>
    );
};

export default SecondaryHero;