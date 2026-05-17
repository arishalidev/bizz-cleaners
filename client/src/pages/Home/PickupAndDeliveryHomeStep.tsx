import React from 'react';
import Body from "../../components/Body.tsx";

interface PickupAndDeliveryStepProps {
    image: string,
    imageAlt: string,
    title: string,
    description: string,
    tagline: string,
}

const PickupAndDeliveryHomeStep: React.FC<PickupAndDeliveryStepProps> = ({image, title, description, tagline, imageAlt}) => {
    return (
        <div className={"lg:flex-1"}>
            <div className={"lg:h-18 xl:h-10"}>
                <h4 className={"text-primary-500 text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 lg:mb-0"}>{title}</h4>
            </div>
            <div className={"flex gap-4 md:gap-12 lg:flex-col"}>
                <img src={image} alt={imageAlt} className={"size-38 md:size-64 object-contain p-2 lg:p-0"}/>
                <div className={"flex flex-col gap-2 justify-center"}>
                    <Body>{description}</Body>
                    <Body>{tagline}</Body>
                </div>
            </div>
        </div>
    );
};

export default PickupAndDeliveryHomeStep;