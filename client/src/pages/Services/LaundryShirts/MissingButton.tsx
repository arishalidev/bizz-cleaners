import React from 'react';
import Body from "../../../components/Body.tsx";

interface MissingButtonProps {

}

const MissingButton: React.FC<MissingButtonProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <h3 className={"text-xl md:text-2xl mb-3"}>Missing button? We'll take care of it</h3>
                <div className={"flex-col flex gap-3 max-w-150"}>

                    <Body>One of the most common things customers appreciate is our button inspection.</Body>

                    <Body>If we notice a missing button while processing your shirt, we'll replace it whenever
                        possible at no additional charge.</Body>

                </div>
            </div>
        </div>
    );
};

export default MissingButton;
