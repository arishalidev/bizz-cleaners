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
            <div className={"flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr]"}>
                <Headline className={"text-white"}>{headline}</Headline>
                <Body className={"text-white"}>
                    {body}
                </Body>
                <div className={"flex justify-center mt-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"}>
                    <img className={"w-full h-64 md:h-96 object-contain"} src={image} alt={imageAlt}/>
                </div>
            </div>
        </div>
    );
};

export default Step;