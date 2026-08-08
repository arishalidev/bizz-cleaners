import React, {useEffect, useState} from "react"

import SecondaryHero from "../../components/SecondaryHero.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import {apiBase} from "../../utils/links.ts";


interface ContactUsProps {

}


const ContactUs: React.FC<ContactUsProps> = () => {

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
        <>
            <SecondaryHero header={"Contact us"}></SecondaryHero>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen}/>
        </>
    );
};

export default ContactUs;