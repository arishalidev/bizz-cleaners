import React from 'react';
import SecondaryHero from "../../components/SecondaryHero.tsx"
import Owners from "./Owners.tsx"
import BizzCleaners from "./BizzCleaners.tsx"
import TrustCards from "./TrustCards.tsx"

interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={<>Serving Flower Mound with <br className={"max-[440px]:hidden"}/> 30 years of experience</>} subHeader={"A family business built on doing things the right way."}></SecondaryHero>
            <Owners/>
            <BizzCleaners/>
            <TrustCards></TrustCards>
            <div className={"limit-size responsive-px"}>
                <hr className={"text-neutral-600"}/>
            </div>
        </div>
    );
};

export default About;