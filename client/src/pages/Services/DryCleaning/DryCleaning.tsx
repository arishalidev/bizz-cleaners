import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import CleanerApproach from "./CleanerApproach.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";
import { Helmet } from 'react-helmet-async';
import clothesLoaded from "../../../assets/clothesLoaded.jpg";

interface DryCleaningProps {

}

const DryCleaning: React.FC<DryCleaningProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/dry-cleaning";

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
            <SecondaryHero header={"Dry cleaning done with care"} smallSize={true}/>
            <Introduction/>
            <Highlights/>
            <CleanerApproach/>
            <TurnaroundTimes/>
            <FAQSection faqs={faqs}>
                <img className={"rounded-md mx-auto max-w-5xl w-full mt-8 md:mt-16"} src={clothesLoaded}
                     alt={"Team Portrait of Bizz Cleaners staff."}/>
            </FAQSection>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>

        </div>
    );
};

export default DryCleaning;