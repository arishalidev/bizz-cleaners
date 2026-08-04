import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";

interface WhyItMattersProps {

}

const WhyItMatters: React.FC<WhyItMattersProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Why wedding dress cleaning matters</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>After a wedding, many gowns look perfectly clean at first glance. What many brides don't realize
                        is that stains from champagne, cake, makeup, perfume, and perspiration can remain hidden in the
                        fabric.</Body>

                    <Body>Over time, those stains can oxidize and become yellow or brown, making them much harder to
                        remove. Having your gown professionally cleaned soon after the wedding helps protect the fabric
                        and prevents those hidden stains from becoming permanent.</Body>


                </div>
            </div>
        </div>
    );
};

export default WhyItMatters;