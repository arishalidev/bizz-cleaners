import React, {useEffect} from 'react';
import { NavbarContext } from "../contexts/NavbarContext.tsx"
import {useContext, useRef } from "react";

interface SecondaryHeroProps {
    header: React.ReactNode,
    subHeader?: React.ReactNode,
    smallSize?: boolean
    cta?: React.ReactNode,
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({header, subHeader, smallSize} : SecondaryHeroProps) => {

    const { setScrolledPast } = useContext(NavbarContext)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const hero = heroRef.current;
        if(!hero) return;

        const update = () => {
            setScrolledPast(window.scrollY > -1);
        }

        update();
        window.addEventListener("scroll", update, {passive: true});
        return () => window.removeEventListener("scroll", update)
    }, []);

    let size;
    if(smallSize === true) {
        size = "limit-size-5xl";
    } else {
        size = "limit-size";
    }

    return (
        <div className={" bg-white"} ref={ heroRef}>
            <div className={"responsive-px " + size}>
                <div className={"h-32 lg:h-38"}></div>
                <h1 className={"text-3xl text-neutral-900 font-bold md:text-4xl lg:text-5xl leading-tight"}>{header}</h1>
                {subHeader && <h2 className={"text-xl text-neutral-900 font-normal md:text-2xl lg:text-3xl mt-2"}>{subHeader}</h2>}
            </div>
        </div>
    );
};

export default SecondaryHero;