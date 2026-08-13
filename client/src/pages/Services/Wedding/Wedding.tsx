import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";
import FAQSection from "./FAQSection.tsx"
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";
import WhyItMatters from "./WhyItMatters.tsx";
import SpecializedCare from "./SpecializedCare.tsx";
import Preservation from "./Preservation.tsx";
import { Helmet } from 'react-helmet-async';

interface DryCleaningProps {

}

const Wedding: React.FC<DryCleaningProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/wedding";

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
            <SecondaryHero header={"Wedding dress cleaning and preservation"} smallSize={true}/>
            <Introduction/>
            <WhyItMatters/>
            <SpecializedCare/>
            <Preservation/>
            <TurnaroundTimes/>
            <FAQSection/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>

        </div>
    );
};

export default Wedding;