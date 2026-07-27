import React from 'react';
import SecondaryHero from "../../../components/SecondaryHero.tsx";
import Introduction from "../../PickupAndDelivery/Introduction.tsx";

interface DryCleaningProps {

}

const DryCleaning: React.FC<DryCleaningProps> = ({}) => {
    return (
        <div>
            <SecondaryHero header={"Dry cleaning done with care"} smallSize={true}/>
            <Introduction/>
        </div>
    );
};

export default DryCleaning;