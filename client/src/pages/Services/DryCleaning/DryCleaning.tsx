import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";
import CleanerApproach from "./CleanerApproach.tsx";
import TurnaroundTimes from "./TurnaroundTimes.tsx";

interface DryCleaningProps {

}

const DryCleaning: React.FC<DryCleaningProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={"Dry cleaning done with care"} smallSize={true}/>
            <Introduction/>
            <Highlights/>
            <CleanerApproach/>
            <TurnaroundTimes/>
        </div>
    );
};

export default DryCleaning;