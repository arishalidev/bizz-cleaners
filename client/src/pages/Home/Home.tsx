import Hero from "./Hero.tsx";
import TrustStrip from "./TrustStrip.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDelivery from "./PickupAndDelivery.tsx";
import Testimonials from "./Testimonials.tsx";
import BusinessInfo from "./BusinessInfo.tsx";


import { useEffect, useState } from 'react';

function Home() {

    const [rating, setRating] = useState<number | null>(null);
    const [userRatingCount, setUserRatingCountCount] = useState<number | null>(null);
    const [hoursOfOperation, setHoursOfOperation] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/get/business-information')
            .then(res => res.json())
            .then(data => {
                setRating(data.rating);
                setUserRatingCountCount(data.userRatingCount);
                setHoursOfOperation(data.hoursOfOperation);
            })
    }, []);

    return (
        <div>
            <Hero/>
            <div className={"mx-4"}>
                <TrustStrip rating={rating} userRatingCount={userRatingCount}/>
                <Highlights/>
                <SpecialtyServices/>
                <PickupAndDelivery/>
                <Testimonials rating={rating} userRatingCount={userRatingCount}/>
                <BusinessInfo/>
            </div>
        </div>
    );
}
//
export default Home;