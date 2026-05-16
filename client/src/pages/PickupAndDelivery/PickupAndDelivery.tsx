import SecondaryHero from "../../components/SecondaryHero.tsx";
import Button from "../../components/Button.tsx";
import TopQuote from "./TopQuote.tsx";
import Introduction from "./Introduction.tsx";
import DeliveryHighlights from "./DeliveryHighlights.tsx";
import Steps from "./Steps.tsx";
import ServiceArea from "./ServiceArea.tsx";

import React, {useEffect, useState} from "react";
import DeliveryFaq from "./DeliveryFaq.tsx";

interface PickupAndDeliveryProps {

}

const PickupAndDelivery: React.FC<PickupAndDeliveryProps> = ({}) => {

    const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string | undefined>();

    useEffect(() => {
        fetch("/api/get/google-maps-api-key")
            .then(res => res.json())
            .then(data => {
                setGoogleMapsApiKey(data.key)
            })
    }, []);

    return (
        <div>
            <SecondaryHero header={"Six years caring for North DFW's closets"} cta={<Button>Schedule a pickup</Button>}/>
            <TopQuote/>
            <Introduction/>
            <Steps/>
            <DeliveryHighlights/>

            <div className={"px-4 pt-2 pb-12 bg-white"}>
                <Button className={"w-full"}>Book now</Button>
            </div>

            <ServiceArea apiKey={googleMapsApiKey}/>

            <DeliveryFaq/>
        </div>
    );
};

export default PickupAndDelivery;