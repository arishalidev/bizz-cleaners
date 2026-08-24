import React, {useEffect, useState} from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import {apiBase} from "../../../utils/links.ts";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import { Helmet } from 'react-helmet-async';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/services";

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
            <SecondaryHero smallSize={true} header={"Specialty cleaning services"}/>
            <SpecialtyServices/>
            <BusinessInfo hoursOfOperation={hoursOfOperation} isOpen={isOpen} ctaHeadline={ctaHeadline}
                          ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>
        </div>
    );
};

export default Services;