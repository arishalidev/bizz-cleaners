import Hero from "./Hero.tsx";
//import TrustStrip from "./TrustStrip.tsx";
//import AboutHome from "./AboutHome.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDeliveryHome from "./PickupAndDeliveryHome.tsx";
import Testimonials from "./Testimonials.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import { useContext } from 'react';
import Button from "../../components/Button.tsx";
import { linkToPortal } from "../../utils/links.ts";
import { useNavigate } from 'react-router-dom';
import SatisfactionGuarantee from "./SatisfactionGuarantee.tsx";
import { Helmet } from 'react-helmet-async';
import { BusinessInfoContext } from "../../contexts/BusinessInfoContext.tsx";

function Home() {

    const canonicalUrl = "https://www.bizzclean.com/";

    const {rating, userRatingCount} = useContext(BusinessInfoContext);

    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
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
            <SatisfactionGuarantee/>
            <Testimonials rating={rating} userRatingCount={userRatingCount}/>
            <BusinessInfo/>
        </div>
    );
}
//
export default Home;