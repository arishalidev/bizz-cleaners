import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";
import FAQSection from "./FAQSection.tsx"
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "./BusinessInfo.tsx";

interface DryCleaningProps {

}

const Leather: React.FC<DryCleaningProps> = ({}) => {

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
            <SecondaryHero header={"Leather cleaning"} smallSize={true}/>
            <Introduction/>
            <Highlights/>
            <TurnaroundTimes/>
            <FAQSection/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>

        </div>
    );
};

export default Leather;