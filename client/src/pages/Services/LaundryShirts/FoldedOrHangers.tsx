import React from 'react';
import Body from "../../../components/Body.tsx";

interface FoldedOrHangersProps {

}

const FoldedOrHangers: React.FC<FoldedOrHangersProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <h3 className={"text-xl md:text-2xl mb-3"}>Folded or on hangers</h3>
                <div className={"flex-col flex gap-3 max-w-150"}>

                    <Body>Some customers like shirts folded neatly for travel or storage. Others prefer them on
                        hangers and ready for the closet. We'll prepare them whichever way you prefer.</Body>

                </div>
            </div>
        </div>
    );
};

export default FoldedOrHangers;
