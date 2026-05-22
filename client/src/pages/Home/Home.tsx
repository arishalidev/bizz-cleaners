import Hero from "./Hero.tsx";
import TrustStrip from "./TrustStrip.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDeliveryHome from "./PickupAndDeliveryHome.tsx";
import Testimonials from "./Testimonials.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import { useEffect, useState } from 'react';
import AboutHome from "./AboutHome.tsx";
import Button from "../../components/Button.tsx";
import { linkToPortal } from "../../utils/links.ts";

function Home() {

    const [rating, setRating] = useState<number | null>(null);
    const [userRatingCount, setUserRatingCountCount] = useState<number | null>(null);
    const [hoursOfOperation, setHoursOfOperation] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean | undefined>();

    useEffect(() => {
        fetch('/api/get/business-information')
            .then(res => res.json())
            .then(data => {
                setRating(data.rating);
                setUserRatingCountCount(data.userRatingCount);
                setHoursOfOperation(data.hoursOfOperation);
                setIsOpen(data.isOpen);
            })
    }, []);

    return (
        <div>
            <Hero/>
            <TrustStrip rating={rating} userRatingCount={userRatingCount}/>
            <Highlights/>
            <PickupAndDeliveryHome/>

            <div className={"bg-white responsive-px pb-15 -mt-4 md:flex md:justify-center"}>
                <Button className={"w-full md:w-3/5 max-w-4xl"} onClick={linkToPortal}>Book Now</Button>
            </div>


            <SpecialtyServices/>
            <AboutHome/>
            <Testimonials rating={rating} userRatingCount={userRatingCount}/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>
        </div>
    );
}
//
export default Home;