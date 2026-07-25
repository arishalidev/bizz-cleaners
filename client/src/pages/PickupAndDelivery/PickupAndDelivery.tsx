import SecondaryHero from "../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import Steps from "./Steps.tsx";
import ServiceArea from "./ServiceArea.tsx";

import React, {useEffect, useState} from "react";
import DeliveryFaq from "./DeliveryFaq.tsx";
import {apiBase, linkToPortal} from "../../utils/links.ts";
import Body from "../../components/Body.tsx";
import Button from "../../components/Button.tsx";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();

    return (
        <div>
            <SecondaryHero header={"Laundry and dry cleaning services without the extra trip"}/>
            {/*<TopQuote/>*/}
            <Introduction/>
            <Steps/>
            <Highlights/>

            <ServiceArea apiKey={googleMapsApiKey}/>

            <DeliveryFaq/>

            <div className={"bg-white"}>
                <div className={"responsive-px limit-size-5xl pb-15 -mt-9 md:-mt-12"}>
                    <div className={"mt-10 flex flex-col gap-2"}>

                        <h3 className={`font-medium text-xl md:text-2xl lg:max-w-150 lg:mr-auto`}>Ready to get started?</h3>
                        <Body>Skip the trip to the dry cleaner and let us come to you.</Body>

                    <div className={"flex gap-3 mt-2"}>
                        <Button className={"flex-1 md:flex-none md:w-56"} onClick={linkToPortal}>Schedule pickup </Button>
                        <Button className={"flex-1 md:flex-none md:w-56"} onClick={() => navigate("/delivery")}
                            variant={"other"}>Learn more</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PickupAndDelivery;