import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import LittleThings from "./LittleThings.tsx";
import MissingButton from "./MissingButton.tsx";
import FoldedOrHangers from "./FoldedOrHangers.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";
import FAQSection from "./FAQSection.tsx"
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";
import { Helmet } from 'react-helmet-async';

interface LaundryShirtsProps {

}

const LaundryShirts: React.FC<LaundryShirtsProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/laundry-shirts";

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
            <SecondaryHero header={"Dress shirt cleaning and pressing"} smallSize={true}/>
            <Introduction/>
            <LittleThings/>
            <MissingButton/>
            <FoldedOrHangers/>
            <TurnaroundTimes/>
            <FAQSection/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>

        </div>
    );
};

export default LaundryShirts;
