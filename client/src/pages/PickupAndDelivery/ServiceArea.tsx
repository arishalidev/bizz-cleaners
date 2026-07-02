import React, {useState} from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
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
    }

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
    }

    function joinWaitlist() {
        window.open("mailto:business@bizzclean.com");
    }


    const position = {lat: 33.01602299, lng: -97.07124099};

    return (
        <div id={"service-area"} className={"responsive-px responsive-py limit-size py-8"}>
            <SectionLabel>Service Area</SectionLabel>
            <Headline className={"mt-4"}>Are we in your neighborhood?</Headline>
            <Body className={"mt-2 max-w-150"}>We've called North DFW home for six years, and our routes keep growing. Pop in your zip code or share your location to see if we're already coming your way — and if we're not yet, we'd love to know you're waiting.</Body>


            <div className={"lg:flex lg:gap-12"}>
                {apiKey && <APIProvider apiKey={apiKey}>
                <div className={"w-full h-120 mt-6 lg:max-w-150"}>
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
                                   className={" bg-white rounded-md outline p-4 md:py-5 min-w-16 text-lg"}/>
                            <Button type={"button"} variant={"other"}
                                    className={"outline-1 w-50 bg-neutral-900 text-neutral-50 hover:bg-black"}
                                    onClick={zipCodeEntry}>Enter</Button>
                        </form>
                        {zipErrorMessage && <div className={"text-red-500 mt-1"}>{zipErrorMessage}</div>}

                        <button
                            className={"group mt-2 inline-flex items-center gap-1 text-neutral-900 hover:text-black relative text-[18px]/8"}
                            onClick={validateUserLocation}>
                            Use My Location<MdOutlineLocationOn className={"text-xl"}/>
                            <div
                                className={"absolute h-1 bg-purple-100 group-hover:bg-purple-200 group-active:bg-purple-300 w-full bottom-1"}></div>
                        </button>
                        {locationErrorMessage && <div className={"text-red-500 mt-1"}>{locationErrorMessage}</div>}
                    </div>

                    <div className={"min-h-64 bg-white mt-12 rounded-md shadow py-4 mx-auto"}>
                        {validZip === undefined ? (
                            <div className={"flex flex-col items-center gap-8 lg:max-h-96"}>
                                <img src={deliveryVan} alt={""} className={"opacity-65 max-w-120 px-12"}/>
                            </div>
                        ) : validZip ? (
                            <div className={"flex flex-col items-center gap-10 mt-6"}>
                                <Headline className={"inline-flex items-center gap-2"}><span
                                    className={"text-primary-500"}><FaCheck/></span>We
                                    Service your area!</Headline>
                                <Button className={"w-56"} onClick={linkToPortal}>Book Now</Button>
                            </div>
                        ) : (
                            <div className={"flex flex-col items-center gap-8 mt-6"}>
                                <div>
                                    <Headline className={"inline-flex items-center gap-2"}><span
                                        className={"text-red-500"}><FaXmark/></span>We dont service this area</Headline>
                                    <Body>Let us know you're waiting:</Body>
                                </div>
                                <Button className={"w-56 outline-2"} variant={"secondary"} onClick={joinWaitlist}>Join
                                    Waitlist</Button>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceArea;