import Hero from "./Hero.tsx";
//import TrustStrip from "./TrustStrip.tsx";
//import AboutHome from "./AboutHome.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDeliveryHome from "./PickupAndDeliveryHome.tsx";
import Testimonials from "./Testimonials.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import { useEffect, useState } from 'react';
import Button from "../../components/Button.tsx";
import { linkToPortal, apiBase } from "../../utils/links.ts";
import { useNavigate } from 'react-router-dom';

function Home() {

    const [rating, setRating] = useState<number | null>(null);
    const [userRatingCount, setUserRatingCountCount] = useState<number | null>(null);
    const [hoursOfOperation, setHoursOfOperation] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean | undefined>();

    useEffect(() => {
        fetch(`${apiBase}/api/get/business-information`)
            .then(res => res.json())
            .then(data => {
                setRating(data.rating);
                setUserRatingCountCount(data.userRatingCount);
                setHoursOfOperation(data.hoursOfOperation);
                setIsOpen(data.isOpen);
            })
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <Hero/>
            {/*<TrustStrip rating={rating} userRatingCount={userRatingCount}/>*/}
            <Highlights/>
            <PickupAndDeliveryHome/>

            <div className={"bg-white"}>
                <div className={"responsive-px limit-size pb-15 -mt-9 md:-mt-12 flex gap-3"}>
                    <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule pickup </Button>
                    <Button className={"flex-1 md:flex-none md:w-56"} onClick={() => navigate("/delivery")}
                            variant={"other"}>Learn more</Button>
                </div>
            </div>


            <SpecialtyServices/>
            {/*<AboutHome/>*/}
            <Testimonials rating={rating} userRatingCount={userRatingCount}/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>
        </div>
    );
}
//
export default Home;