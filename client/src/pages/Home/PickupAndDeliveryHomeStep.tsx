import React from 'react';
import Body from "../../components/Body.tsx";

interface PickupAndDeliveryStepProps {
    image: string,
    imageAlt: string,
    title: string,
    description: string,
}

const PickupAndDeliveryHomeStep: React.FC<PickupAndDeliveryStepProps> = ({image, title, description, imageAlt}) => {
    return (
        <div>
            <h4 className={"text-primary-500 text-2xl font-semibold mb-6"}>{title}</h4>
            <div className={"flex gap-4"}>
                <img src={image} alt={imageAlt} className={"w-3/8 object-contain"}/>
                <Body className={"whitespace-pre-line w-5/8"}>{description}</Body>
            </div>
        </div>
    );
};

export default PickupAndDeliveryHomeStep;