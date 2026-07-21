import React from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx"
import Introduction from "./Introduction.tsx"
import Highlights from "./Highlights.tsx";
import OurPromise from "./OurPromise.tsx";

interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={<>Serving Flower Mound with <br className={"max-[440px]:hidden"}/> 30 years of experience</>} subHeader={"A family business built on doing things the right way."}></SecondaryHero>
            <Introduction/>
            <Highlights/>
            <OurPromise/>
        </div>
    );
};

export default About;