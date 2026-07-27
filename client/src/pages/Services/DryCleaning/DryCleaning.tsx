import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "./Introduction.tsx";
import Highlights from "./Highlights.tsx";

interface DryCleaningProps {

}

const DryCleaning: React.FC<DryCleaningProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={"Dry cleaning done with care"} smallSize={true}/>
            <Introduction/>
            <Highlights/>
        </div>
    );
};

export default DryCleaning;