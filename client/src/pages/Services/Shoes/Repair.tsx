import React from 'react';
import Body from "../../../components/Body.tsx";

interface RepairProps {

}

const Repair: React.FC<RepairProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <h3 className={"text-xl md:text-2xl mb-3"}>Need a repair?</h3>
                <div className={"flex-col flex gap-3 max-w-150"}>

                    <Body>We also offer shoe repair through a trusted local shoe repair partner.</Body>

                    <Body>If your shoes need repairs beyond cleaning, we'll help coordinate the process and make sure they
                        receive the attention they need.</Body>
                    
                </div>
            </div>
        </div>
    );
};

export default Repair;