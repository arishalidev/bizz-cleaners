import React from "react"

import SecondaryHero from "../../components/SecondaryHero.tsx";
import BusinessInfo from "./BusinessInfo.tsx";
import { Helmet } from 'react-helmet-async';


interface ContactUsProps {

}


const ContactUs: React.FC<ContactUsProps> = () => {

    const canonicalUrl = "https://www.bizzclean.com/contact";

    return (
        <>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Contact us"}></SecondaryHero>
            <BusinessInfo/>
        </>
    );
};

export default ContactUs;