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
            <div className={"flex flex-col gap-4"}>
                <Headline className={"text-white"}>{headline}</Headline>
                <Body className={"text-white"}>
                    {body}
                </Body>
                <div className={"flex justify-center mt-2"}>
                    <img className={"w-full h-64 object-contain"} src={image} alt={imageAlt}/>
                </div>
            </div>
        </div>
    );
};

export default Step;