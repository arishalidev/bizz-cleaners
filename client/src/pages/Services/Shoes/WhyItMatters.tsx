import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";

interface WhyItMattersProps {

}

const WhyItMatters: React.FC<WhyItMattersProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Bring your favourite pair back to life</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>A good pair of shoes can last for years with the right care.</Body>
                    <Body>When dirt, scuffs, and everyday wear start showing, professional cleaning can help freshen them
                        up and keep them looking their best.</Body>
                    <Body>Every pair is inspected before cleaning so we can choose the right process for the materials and
                        condition of the shoe.</Body>


                </div>
            </div>
        </div>
    );
};

export default WhyItMatters;