import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx"
import Introduction from "./Introduction.tsx"
import Highlights from "./Highlights.tsx";
import OurPromise from "./OurPromise.tsx";
import LittleThingsMatter from "./littleThingsMatter.tsx";
import BusinessInfo from "../About/BusinessInfo.tsx";
import {apiBase} from "../../utils/links.ts";
import Owners from "./Owners.tsx";
import { Helmet } from 'react-helmet-async';

interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/about";

    const [hoursOfOperation, setHoursOfOperation] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean | undefined>();

    useEffect(() => {
        fetch(`${apiBase}/api/get/business-information`)
            .then(res => res.json())
            .then(data => {
                setHoursOfOperation(data.hoursOfOperation);
                setIsOpen(data.isOpen);
            })
    }, []);

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero subHeader={<>Serving Flower Mound with 30 years of experience</>} header={"About us"} smallSize={true}></SecondaryHero>
            <Introduction/>
            <Highlights/>
            <Owners/>
            <OurPromise/>
            <LittleThingsMatter/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>
        </div>
    );
};

export default About;