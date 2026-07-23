import SecondaryHero from "../../components/SecondaryHero.tsx";
import Button from "../../components/Button.tsx";
//import TopQuote from "./TopQuote.tsx";
import Introduction from "./Introduction.tsx";
import DeliveryHighlights from "./DeliveryHighlights.tsx";
import Steps from "./Steps.tsx";
import ServiceArea from "./ServiceArea.tsx";

import React, {useEffect, useState} from "react";
import DeliveryFaq from "./DeliveryFaq.tsx";
import {linkToPortal, apiBase} from "../../utils/links.ts";

interface PickupAndDeliveryProps {

}

const PickupAndDelivery: React.FC<PickupAndDeliveryProps> = ({}) => {

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
            <SecondaryHero header={"Laundry and dry cleaning services without the extra trip"}/>
            {/*<TopQuote/>*/}
            <Introduction/>
            <Steps/>
            <DeliveryHighlights/>

            <div className={"bg-white"}>
                <div className={"responsive-px limit-size pt-2 pb-12"}>
                    <Button className={"w-full"} onClick={linkToPortal}>Book now</Button>
                </div>
            </div>

            <ServiceArea apiKey={googleMapsApiKey}/>

            <DeliveryFaq/>
        </div>
    );
};

export default PickupAndDelivery;