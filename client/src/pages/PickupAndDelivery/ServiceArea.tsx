import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

import {APIProvider, Map, Polygon} from '@vis.gl/react-google-maps';

interface ServiceAreaProps {
    apiKey: string | undefined;
}

const ServiceArea: React.FC<ServiceAreaProps> = ({apiKey} : ServiceAreaProps) => {

    const position = {lat: 33.01602299, lng: -97.07124099};

    return (
        <div id={"service-area"} className={"px-4 py-8"}>
            <SectionLabel>Service Area</SectionLabel>
            <Headline className={"mt-4"}>Are we in your neighborhood?</Headline>
            <Body className={"mt-2"}>We've called North DFW home for six years, and our routes keep growing. Pop in your zip code or share your location to see if we're already coming your way — and if we're not yet, we'd love to know you're waiting.</Body>

            {apiKey && <APIProvider apiKey={apiKey}>
                <div className={"w-full h-150 mt-4"}>
                    <Map defaultCenter={position} defaultZoom={10.7} mapId="59b74ff889c3544d96f3646f"></Map>

                    <Polygon
                        paths={[
                            { lat: 32.9585455, lng: -97.3119741 },
                            { lat: 33.2083552, lng: -97.1644893 },
                            { lat: 33.1872388, lng: -97.1100344 },
                            { lat: 33.2105777, lng: -97.0456183 },
                            { lat: 33.0630583, lng: -96.9562256 },
                            { lat: 33.0516788, lng: -96.9230113 },
                            { lat: 33.0014901, lng: -96.9608922 },
                            { lat: 32.9834467, lng: -96.9333001 },
                            { lat: 32.9179097, lng: -96.9361061 },
                            { lat: 32.8563229, lng: -97.0145481 },
                            { lat: 32.8374638, lng: -97.0187571 },
                            { lat: 32.8375434, lng: -97.1239104 },
                            { lat: 32.8689729, lng: -97.1014624 },
                            { lat: 32.9337753, lng: -97.1057135 },
                            { lat: 32.9984663, lng: -97.2153076 }
                        ]}
                        fillColor="#0088ff"
                        fillOpacity={0.2}
                        strokeColor="#0088ff"
                        strokeWeight={2}
                    />
                </div>
            </APIProvider>}


        </div>
    );
};

export default ServiceArea;