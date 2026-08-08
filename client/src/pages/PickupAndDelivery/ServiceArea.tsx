import React, {useRef, useState} from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import deliveryVan from "../../assets/deliveryVan.png"

import {APIProvider, Map, Polygon} from '@vis.gl/react-google-maps';
import Button from "../../components/Button.tsx";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {linkToPortal, apiBase} from "../../utils/links.ts";

interface ServiceAreaProps {
    apiKey: string | undefined;
}

const ServiceArea: React.FC<ServiceAreaProps> = ({apiKey} : ServiceAreaProps) => {

    const [zipCode, setZipCode] = useState<string>("");
    const [zipErrorMessage, setZipErrorMessage] = useState<string>("");

    const [locationErrorMessage, setLocationErrorMessage] = useState<string>("");

    const [validZip, setValidZip] = useState<boolean | undefined>();

    function validateZipCode() {
        if(zipCode === "") {
            setZipErrorMessage("Please enter a zip code")
            return false;
        }

        if(isNaN(Number(zipCode))) {
            setZipErrorMessage("Zip code must be digits only")
            return false;
        }

        if(zipCode.length < 5) {
            setZipErrorMessage("Zip code is too short")
            return false;
        }

        if(zipCode.length > 5) {
            setZipErrorMessage("Zip code is too long")
            return false;
        }

        setZipErrorMessage("");
        return true;
    }

    function zipCodeEntry() {
        if(!validateZipCode()) return;

        fetch(`${apiBase}/api/validate-zip`, {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({zip: zipCode})
        })
            .then(res => res.json())
            .then(data => setValidZip(data.valid))

        scrollToResult()
    }

    const resultRef = useRef<HTMLDivElement>(null);

    const scrollToResult = () => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    function validateUserLocation() {
        if (!navigator.geolocation) {
            setLocationErrorMessage("Geolocation is not supported by your browser!");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = { lat: position.coords.latitude, lng: position.coords.longitude };

                fetch(`${apiBase}/api/validate-location`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json'},
                    body: JSON.stringify(coords)
                })
                    .then(res => res.json())
                    .then(data => setValidZip(data.valid))
            },
            (err) => setLocationErrorMessage(err.message)
        );

        scrollToResult()

    }

    function joinWaitlist() {
        window.open("mailto:business@bizzclean.com");
    }


    const position = {lat: 33.01602299, lng: -97.07124099};

    return (
        <div className={"responsive-px responsive-py limit-size-5xl py-8"}>
            <div id={"service-area"} className={"-mt-28 absolute"}></div>
            <Headline className={"mt-4"}>Are we in your neighborhood?</Headline>

            <div className={"flex-col flex gap-2 max-w-180 mt-4"}>
                <Body>We currently serve Flower Mound and many surrounding North DFW communities.</Body>
                <Body>Enter your zip code below to see if pickup and delivery is available in your area. If we're not
                    there yet, let us know—we're always looking to expand our routes.</Body>
            </div>

            <div>
                {apiKey && <APIProvider apiKey={apiKey}>
                <div className={"w-full h-120 mt-6"}>
                    <Map defaultCenter={position} defaultZoom={10.4} mapId="59b74ff889c3544d96f3646f"
                         gestureHandling="none"></Map>

                    <Polygon
                        paths={[
                            {lat: 32.9585455, lng: -97.3119741},
                            {lat: 33.2083552, lng: -97.1644893},
                            {lat: 33.1872388, lng: -97.1100344},
                            {lat: 33.2105777, lng: -97.0456183},
                            {lat: 33.0630583, lng: -96.9562256},
                            {lat: 33.0516788, lng: -96.9230113},
                            {lat: 33.0014901, lng: -96.9608922},
                            {lat: 32.9834467, lng: -96.9333001},
                            {lat: 32.9179097, lng: -96.9361061},
                            {lat: 32.8563229, lng: -97.0145481},
                            {lat: 32.8374638, lng: -97.0187571},
                            {lat: 32.8375434, lng: -97.1239104},
                            {lat: 32.8689729, lng: -97.1014624},
                            {lat: 32.9337753, lng: -97.1057135},
                            {lat: 32.9984663, lng: -97.2153076}
                        ]}
                        fillColor="#0088ff"
                        fillOpacity={0.2}
                        strokeColor="#0088ff"
                        strokeWeight={2}
                    />
                </div>
            </APIProvider>}

                <div className={"lg:mt-6"}>
                    <div className={"mt-3"}>
                        <form className={"flex gap-3 items-center"} onSubmit={(e) => {
                            e.preventDefault();
                            zipCodeEntry();
                        }
                        }>
                            <input type={"text"}
                                   inputMode={"numeric"}
                                   value={zipCode}
                                   onChange={(e) => setZipCode(e.target.value)}
                                   placeholder={"Enter your zip code"}
                                   className={" bg-white rounded-md outline text-lg py-2 px-4 md:py-3 lg:px-6 shadow-md active:shadow-2xs w-full flex-1 max-w-60"}/>
                            <Button type={"button"} variant={"other"}
                                    className={"outline-1  bg-neutral-900 text-neutral-50 hover:bg-black"}
                                    onClick={zipCodeEntry}>Enter</Button>
                        </form>
                        {zipErrorMessage && <div className={"text-red-500 mt-1"}>{zipErrorMessage}</div>}

                        <button
                            className={"group mt-2 inline-flex items-center gap-1 text-neutral-900 hover:text-black relative text-[18px]/8"}
                            onClick={validateUserLocation}>
                            Use my location<MdOutlineLocationOn className={"text-xl"}/>
                            <div
                                className={"absolute h-1 bg-purple-100 group-hover:bg-purple-200 group-active:bg-purple-300 w-full bottom-1"}></div>
                        </button>
                        {locationErrorMessage && <div className={"text-red-500 mt-1"}>{locationErrorMessage}</div>}
                    </div>

                    <div className={"min-h-64 bg-white mt-12 rounded-md shadow py-4 mx-auto scroll-mt-32"} ref={resultRef}>
                        {validZip === undefined ? (
                            <div className={"flex flex-col items-center lg:max-h-96"}>
                                <img src={deliveryVan} alt={"delivery van placeholder image"} className={"opacity-65 max-w-120 px-4 w-full"}/>
                            </div>
                        ) : validZip ? (
                            <div className={"flex flex-col items-center gap-10 mt-6"}>
                                <Headline className={"inline-flex items-center gap-2"}><span
                                    className={"text-primary-500"}><FaCheck/></span>We service your area!</Headline>
                                <Button className={"w-56"} onClick={linkToPortal}>Book now</Button>
                            </div>
                        ) : (
                            <div className={"flex flex-col items-center gap-8 mt-6"}>
                                <div>
                                    <Headline className={"inline-flex items-center gap-2"}><span
                                        className={"text-red-500"}><FaXmark/></span>We don't service this area</Headline>
                                    <Body>But you can let us know you're waiting!</Body>
                                </div>
                                <Button className={"w-56 outline-2"} variant={"secondary"} onClick={joinWaitlist}>Let us know</Button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceArea;