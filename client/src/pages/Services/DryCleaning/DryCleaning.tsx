import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "../../../components/Introduction.tsx";
import {image as introImage, imageAlt as introImageAlt, headline as introHeadline, paragraphs as introParagraphs} from "./introduction.ts";
import Highlights from "./Highlights.tsx";
import CleanerApproach from "./CleanerApproach.tsx";
import TurnaroundTimes from "../../../components/TurnaroundTimes.tsx";
import {headline as turnaroundHeadline, variant as turnaroundVariant, items as turnaroundItems} from "./turnaroundTimes.ts";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import { Helmet } from 'react-helmet-async';
import clothesLoaded from "../../../assets/clothesLoaded.jpg";

interface DryCleaningProps {

}

const DryCleaning: React.FC<DryCleaningProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/dry-cleaning";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Dry cleaning done with care"} smallSize={true}/>
            <Introduction image={introImage} imageAlt={introImageAlt} headline={introHeadline} paragraphs={introParagraphs}
                          primaryButtonLabel={primaryButtonLabel} primaryButtonAction={primaryButtonAction}/>
            <Highlights/>
            <CleanerApproach/>
            <TurnaroundTimes headline={turnaroundHeadline} items={turnaroundItems} variant={turnaroundVariant}/>
            <FAQSection faqs={faqs}>
                <img className={"rounded-md mx-auto max-w-5xl w-full mt-8 md:mt-16"} src={clothesLoaded}
                     alt={"Team Portrait of Bizz Cleaners staff."}/>
            </FAQSection>
            <BusinessInfo ctaHeadline={ctaHeadline} ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>

        </div>
    );
};

export default DryCleaning;