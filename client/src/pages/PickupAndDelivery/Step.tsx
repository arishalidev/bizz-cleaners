import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

interface StepProps {
    headline: string,
    body: string,
    image: string,
    imageAlt: string,
}

const Step: React.FC<StepProps> = ({headline, body, image, imageAlt}) => {
    return (
        <div className={"mt-4"}>
            <div className={"gap-x-16 grid grid-cols-2 grid-rows-[auto_1fr]"}>
                <Headline>{headline}</Headline>
                <Body className={"max-w-140 lg:min-w-100"}>
                    {body}
                </Body>
                <div className={"justify-center mt-2 col-start-2 row-start-1 row-span-2"}>
                    <div className={"w-full max-w-120 lg:max-w-90"}>
                        <img className={"w-full object-contain"} src={image} alt={imageAlt}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;