import '../../App.css';
import heroImage from '../../assets/hero-image.jpg';
import Button from "../../components/Button.tsx";
import Body from "../../components/Body.tsx";
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
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"responsive-px limit-size"}>
                <div className={"absolute top-24 min-[850px]:top-28 text-white space-y-2"}>
                    <h1 className={"text-3xl font-semibold md:text-5xl md:mb-5"}>Flower Mound’s<br/> Trusted Dry Cleaners</h1>
                    <h2 className={"text-xl font-normal md:text-2xl"}>Same Day Services <br/> Free Pickup and Delivery</h2>

                    <div className={"mt-12 flex space-x-4 md:space-x-6"}>
                        <Button variant={"primary"} onClick={linkToPortal}>Schedule Pickup</Button>
                        <Button variant={"secondary"} onClick={linkToDirections}>Get Directions</Button>
                    </div>

                    <div className={"mt-4 md:mt-6"}>
                        <Body>
                            Or call us at <u><a href={"tel:+19723551807"}>+1 972-355-1807</a></u>
                        </Body>
                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Hero;