import SecondaryHero from "../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import Steps from "./Steps.tsx";
import ServiceArea from "./ServiceArea.tsx";

import React, {useEffect, useState} from "react";
import DeliveryFaq from "./DeliveryFaq.tsx";
import {apiBase} from "../../utils/links.ts";

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
            <Highlights/>

            <ServiceArea apiKey={googleMapsApiKey}/>

            <DeliveryFaq/>
        </div>
    );
};

export default PickupAndDelivery;