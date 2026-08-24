import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import CleanedWithCare from "./CleanedWithCare.tsx";
import Pressing from "./Pressing.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";
import { Helmet } from 'react-helmet-async';

interface IndianGarmentsProps {

}

const IndianGarments: React.FC<IndianGarmentsProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/indian-garments";

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
            <SecondaryHero header={"Indian garment cleaning"} smallSize={true}/>
            <Introduction/>
            <CleanedWithCare/>
            <Pressing/>
            <TurnaroundTimes/>
            <FAQSection faqs={faqs}/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>

        </div>
    );
};

export default IndianGarments;
