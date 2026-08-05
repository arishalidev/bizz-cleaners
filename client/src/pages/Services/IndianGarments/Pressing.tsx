import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";

interface PressingProps {

}

const Pressing: React.FC<PressingProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Pressing makes all the difference</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>Anyone who owns a saree or lehenga knows that pressing these garments isn't always
                        straightforward. Different fabrics require different temperatures, and detailed
                        embellishments often need extra care during finishing. We take our time with the pressing
                        process so your garment comes back looking clean, polished, and ready for its next
                        event.</Body>

                </div>
            </div>
        </div>
    );
};

export default Pressing;
