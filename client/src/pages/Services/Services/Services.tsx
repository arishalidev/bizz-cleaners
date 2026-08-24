import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import { Helmet } from 'react-helmet-async';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/services";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero smallSize={true} header={"Specialty cleaning services"}/>
            <SpecialtyServices/>
            <BusinessInfo ctaHeadline={ctaHeadline} ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>
        </div>
    );
};

export default Services;