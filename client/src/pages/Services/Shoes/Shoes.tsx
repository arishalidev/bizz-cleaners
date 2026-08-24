import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "../../../components/Introduction.tsx";
import {image as introImage, imageAlt as introImageAlt, headline as introHeadline, paragraphs as introParagraphs} from "./introduction.ts";
import TurnaroundTimes from "../../../components/TurnaroundTimes.tsx";
import {headline as turnaroundHeadline, variant as turnaroundVariant, items as turnaroundItems} from "./turnaroundTimes.ts";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import WhyItMatters from "./WhyItMatters.tsx";
import Repair from "./Repair.tsx";
import { Helmet } from 'react-helmet-async';

interface DryCleaningProps {

}

const Shoes: React.FC<DryCleaningProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/shoes";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Shoe cleaning and repair"} smallSize={true}/>
            <Introduction image={introImage} imageAlt={introImageAlt} headline={introHeadline} paragraphs={introParagraphs}
                          primaryButtonLabel={primaryButtonLabel} primaryButtonAction={primaryButtonAction}/>
            <WhyItMatters/>
            <Repair/>
            <TurnaroundTimes headline={turnaroundHeadline} items={turnaroundItems} variant={turnaroundVariant}/>
            <FAQSection faqs={faqs}/>
            <BusinessInfo ctaHeadline={ctaHeadline} ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>

        </div>
    );
};

export default Shoes;