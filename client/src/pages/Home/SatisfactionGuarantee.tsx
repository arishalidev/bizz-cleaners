import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import {IoStar} from "react-icons/io5";

interface SatisfactionGuaranteeProps {

}

const SatisfactionGuarantee: React.FC<SatisfactionGuaranteeProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"responsive-px max-w-5xl mx-auto responsive-py"}>
                <Headline>Satisfaction guarantee</Headline>
                    <div className={"inline-flex items-center gap-1 text-[#fedf01] text-4xl lg:text-5xl lg:mt-4 mt-3"}>
                        {Array.from({length: 5}, (_, i) => (<IoStar key={i}/>))}
                    </div>
                <div className={"flex-col flex gap-3 mt-8 max-w-180"}>
                    <Body>If you're ever unhappy with the way an item comes back, let us know.</Body>
                    <Body>We'll gladly re-clean the garment whenever possible. If you're still not satisfied,
                        we'll provide <b>store credit for the amount you paid</b> to have the item cleaned.</Body>
                    <Body>It's a simple promise and one we've stood behind for years.</Body>
                </div>
            </div>
        </div>
    );
};

export default SatisfactionGuarantee;