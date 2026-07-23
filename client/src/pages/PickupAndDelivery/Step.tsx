import React from 'react';
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
            <div className={"gap-x-4 md:gap-x-8 lg:gap-x-16 flex"}>
                <div>
                    <h3 className={"text-xl md:text-2xl"}>{headline}</h3>
                    <Body subtext={true} className={"max-w-140 lg:min-w-100 mt-3"}>
                        {body}
                    </Body>
                </div>
                <div className={"justify-center mt-2 col-start-2 row-start-1 row-span-2 w-15/10 max-w-75"}>
                        <img className={"object-contain"} src={image} alt={imageAlt}/>
                </div>
            </div>
        </div>
    );
};

export default Step;