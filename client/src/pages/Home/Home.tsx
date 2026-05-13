import Hero from "./Hero.tsx";
import TrustStrip from "./TrustStrip.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDelivery from "./PickupAndDelivery.tsx";
import Testimonials from "./Testimonials.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import { useEffect, useState } from 'react';
import AboutHome from "./AboutHome.tsx";

function Home() {

    const [rating, setRating] = useState<number | null>(null);
    const [userRatingCount, setUserRatingCountCount] = useState<number | null>(null);
    const [hoursOfOperation, setHoursOfOperation] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean | undefined>();

    useEffect(() => {
        fetch('http://localhost:3000/get/business-information')
            .then(res => res.json())
            .then(data => {
                setRating(data.rating);
                setUserRatingCountCount(data.userRatingCount);
                setHoursOfOperation(data.hoursOfOperation);
                setIsOpen(true);
            })
    }, []);

    return (
        <div>
            <Hero/>
            <TrustStrip rating={rating} userRatingCount={userRatingCount}/>
            <Highlights/>
            <PickupAndDelivery/>
            <SpecialtyServices/>
            <AboutHome/>
            <Testimonials rating={rating} userRatingCount={userRatingCount}/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>
        </div>
    );
}
//
export default Home;