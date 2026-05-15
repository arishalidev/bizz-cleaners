import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

interface ServiceAreaProps {

}

const ServiceArea: React.FC<ServiceAreaProps> = ({}) => {
    return (
        <div id={"service-area"} className={"px-4 py-8"}>
            <SectionLabel>Service Area</SectionLabel>
            <Headline className={"mt-4"}>Are we in your neighborhood?</Headline>
            <Body className={"mt-2"}>We've called North DFW home for six years, and our routes keep growing. Pop in your zip code or share your location to see if we're already coming your way — and if we're not yet, we'd love to know you're waiting.</Body>

        </div>
    );
};

export default ServiceArea;