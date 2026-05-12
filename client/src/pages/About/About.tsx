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
            <SecondaryHero header={"Flower Mound’s Finest Cleaners"} subHeader={"Where every garment is handled with the utmost care"}></SecondaryHero>
            <Owners/>
            <BizzCleaners/>
            <TrustCards></TrustCards>
        </div>
    );
};

export default About;