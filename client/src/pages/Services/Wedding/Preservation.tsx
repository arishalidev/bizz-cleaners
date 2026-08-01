import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";

interface WhyItMattersProps {

}

const WhyItMatters: React.FC<WhyItMattersProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>

            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Wedding dress preservation</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>For brides who want to keep their gown for years (or even generations) preservation is one of the best investments you can make after the wedding. Once cleaned, your gown is placed in a sealed, acid-free preservation chest designed to help protect against dust, discoloration, moisture, and UV exposure. This helps keep fabrics brighter and better protected during long-term storage.</Body>

                    <Body>Before preservation is completed, we'll invite you to inspect your gown and make sure you're happy with the results.</Body>


                </div>
            </div>
        </div>
    );
};

export default WhyItMatters;