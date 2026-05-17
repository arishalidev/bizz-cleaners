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
        <div>
            <h4 className={"text-primary-500 text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 lg:mb-12"}>{title}</h4>
            <div className={"flex gap-4 md:gap-12"}>
                <img src={image} alt={imageAlt} className={"w-3/8 object-contain max-w-60"}/>
                <div className={"flex flex-col gap-5"}>
                    <Body>{description}</Body>
                    <Body>{tagline}</Body>
                </div>
            </div>
        </div>
    );
};

export default PickupAndDeliveryHomeStep;