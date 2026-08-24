import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "../../../components/Introduction.tsx";
import {image as introImage, imageAlt as introImageAlt, headline as introHeadline, paragraphs as introParagraphs} from "./introduction.ts";
import CleanedWithCare from "./CleanedWithCare.tsx";
import Pressing from "./Pressing.tsx";
import TurnaroundTimes from "../../../components/TurnaroundTimes.tsx";
import {headline as turnaroundHeadline, variant as turnaroundVariant, items as turnaroundItems} from "./turnaroundTimes.ts";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import { Helmet } from 'react-helmet-async';

interface IndianGarmentsProps {

}

const IndianGarments: React.FC<IndianGarmentsProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/indian-garments";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Indian garment cleaning"} smallSize={true}/>
            <Introduction image={introImage} imageAlt={introImageAlt} headline={introHeadline} paragraphs={introParagraphs}
                          primaryButtonLabel={primaryButtonLabel} primaryButtonAction={primaryButtonAction}/>
            <CleanedWithCare/>
            <Pressing/>
            <TurnaroundTimes headline={turnaroundHeadline} items={turnaroundItems} variant={turnaroundVariant}/>
            <FAQSection faqs={faqs}/>
            <BusinessInfo ctaHeadline={ctaHeadline} ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>

        </div>
    );
};

export default IndianGarments;
