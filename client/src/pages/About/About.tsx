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
            <SecondaryHero header={"The people behind your clean clothes"} subHeader={"Family-owned, neighbor-focused, and a little obsessed with doing things right."}></SecondaryHero>
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