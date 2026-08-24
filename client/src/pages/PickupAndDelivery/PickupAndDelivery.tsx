import SecondaryHero from "../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import Steps from "./Steps.tsx";
import ServiceArea from "./ServiceArea.tsx";

import React, {useEffect, useState} from "react";
import FAQSection from "../../components/FAQSection.tsx";
import {faqs} from "./faqs.ts";
import {apiBase} from "../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";
import { Helmet } from 'react-helmet-async';

interface PickupAndDeliveryProps {

}

const PickupAndDelivery: React.FC<PickupAndDeliveryProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/delivery";

    const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string | undefined>();

    useEffect(() => {
        fetch(`${apiBase}/api/get/google-maps-api-key`)
            .then(res => res.json())
            .then(data => {
                setGoogleMapsApiKey(data.key)
            })
    }, []);

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Pickup and delivery"} subHeader={"Laundry and dry cleaning services without the extra trip"} smallSize={true}/>
            {/*<TopQuote/>*/}
            <Introduction/>
            <Steps/>
            <Highlights/>

            <ServiceArea apiKey={googleMapsApiKey}/>

            <FAQSection faqs={faqs} className={"-mt-4 md:-mt-8"}/>

            <BusinessInfo/>


        </div>
    );
};

export default PickupAndDelivery;