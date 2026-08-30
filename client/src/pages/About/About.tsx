import React from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx"
import Introduction from "./Introduction.tsx"
import Highlights from "./Highlights.tsx";
import OurPromise from "./OurPromise.tsx";
import LittleThingsMatter from "./littleThingsMatter.tsx";
import BusinessInfo from "../About/BusinessInfo.tsx";
import Owners from "./Owners.tsx";
import { Helmet } from 'react-helmet-async';
import PromoVideo from "./PromoVideo.tsx";

interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {

    const canonicalUrl = "https://www.bizzclean.com/about";

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl}/>
            </Helmet>
            <SecondaryHero subHeader={<>Serving Flower Mound with 30 years of experience</>} header={"About us"}
                           smallSize={true}></SecondaryHero>
            <Introduction/>
            <Highlights/>
            <Owners/>
            <OurPromise/>
            <LittleThingsMatter/>
            <PromoVideo/>
            <BusinessInfo/>
        </div>
    );
};

export default About;