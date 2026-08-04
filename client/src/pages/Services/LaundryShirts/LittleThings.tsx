import React from 'react';
import Body from "../../../components/Body.tsx";
import Headline from "../../../components/Headline.tsx";


interface LittleThingsProps {

}

const LittleThings: React.FC<LittleThingsProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-12"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"text-xl md:text-2xl mb-3"}>It's the little things that matter</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>Anyone can wash a shirt. Getting it ready to wear is where the difference shows.</Body>

                    <Body>Before cleaning begins, we inspect each shirt and look for stains, paying extra attention
                        to collars and cuffs where dirt and oils tend to build up.</Body>

                    <Body>Once cleaned, shirts are professionally pressed to create a crisp, polished finish. If you
                        prefer starch, we'll apply it according to your preference.</Body>

                    <Body>Before the shirt leaves our store, it's inspected one final time.</Body>

                </div>
            </div>
        </div>
    );
};

export default LittleThings;
