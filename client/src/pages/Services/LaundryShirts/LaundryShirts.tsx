import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "../../../components/Introduction.tsx";
import {image as introImage, imageAlt as introImageAlt, headline as introHeadline, paragraphs as introParagraphs} from "./introduction.ts";
import shirtPressed from "../../../assets/shirtPressed.jpg";
import shirtInspected from "../../../assets/shirtInspected.jpg";
import LittleThings from "./LittleThings.tsx";
import MissingButton from "./MissingButton.tsx";
import FoldedOrHangers from "./FoldedOrHangers.tsx";
import TurnaroundTimes from "../../../components/TurnaroundTimes.tsx";
import {headline as turnaroundHeadline, variant as turnaroundVariant, items as turnaroundItems} from "./turnaroundTimes.ts";
import FAQSection from "../../../components/FAQSection.tsx"
import {faqs} from "./faqs.ts";
import BusinessInfo from "../../../components/BusinessInfo.tsx";
import {ctaHeadline, ctaBody, primaryButtonLabel, primaryButtonAction} from "./businessInfoCta.ts";
import { Helmet } from 'react-helmet-async';

interface LaundryShirtsProps {

}

const LaundryShirts: React.FC<LaundryShirtsProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/laundry-shirts";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <SecondaryHero header={"Dress shirt cleaning and pressing"} smallSize={true}/>
            <Introduction image={introImage} imageAlt={introImageAlt} headline={introHeadline} paragraphs={introParagraphs}
                          primaryButtonLabel={primaryButtonLabel} primaryButtonAction={primaryButtonAction}>
                <div className={"flex flex-col md:flex-row gap-4"}>
                    <div>
                        <img className={"rounded-md"} src={shirtPressed} alt={"Dress shirt being pressed"}/>
                    </div>

                    <div>
                        <img className={"rounded-md"} src={shirtInspected} alt={"Dress shirt being inspected"}/>
                    </div>
                </div>
            </Introduction>
            <LittleThings/>
            <MissingButton/>
            <FoldedOrHangers/>
            <TurnaroundTimes headline={turnaroundHeadline} items={turnaroundItems} variant={turnaroundVariant}/>
            <FAQSection faqs={faqs}/>
            <BusinessInfo ctaHeadline={ctaHeadline} ctaBody={ctaBody} primaryButtonLabel={primaryButtonLabel}
                          primaryButtonAction={primaryButtonAction}/>

        </div>
    );
};

export default LaundryShirts;
