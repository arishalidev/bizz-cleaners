import '../../App.css';
import heroImage from '../../assets/hero-image.png';
import Button from "../../components/Button.tsx";
import { linkToDirections, linkToPortal } from "../../utils/links.ts";
import {useContext, useEffect, useRef} from "react";
import {NavbarContext} from "../../contexts/NavbarContext.tsx";

function Hero() {

    const {setScrolledAny, setScrolledPast} = useContext(NavbarContext)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const update = () => {
            const bottom = hero.getBoundingClientRect().bottom;
            setScrolledAny(window.scrollY > 0);
            setScrolledPast(bottom <= 70);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div className={"relative"} ref={heroRef}>

            <img src={heroImage} alt={"Clean pressed shirts"} className={"block w-full object-cover min-h-105 md:max-h-160"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.25)]"}></div>

            <div className={"responsive-px limit-size"}>
                <div className={"absolute top-24 lg:top-30 text-white space-y-2"}>
                    <h1 className={"text-3xl text-shadow-lg font-bold md:text-4xl lg:text-5xl lg:mb-5"}>Professional garment care,<br className={"max-[440px]:hidden"}/>  delivered to your door</h1>
                    <h2 className={"text-xl lg:text-2xl text-shadow-lg font-normal"}>Proudly serving Flower Mound, Highland Village,<br className={"max-[500px]:hidden"}/>Lewisville,and surrounding communities</h2>

                    <div className={"mt-12 lg:mt-16 flex space-x-4 md:space-x-6"}>
                        <Button variant={"primary"} onClick={linkToPortal}>Schedule collection </Button>
                        <Button variant={"secondary"} onClick={linkToDirections}>Find us </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Hero;