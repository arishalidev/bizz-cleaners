import React from 'react';

interface PickupAndDeliveryStepProps {
    image: string,
    imageAlt: string,
    title: string,
    description: string,
}

const PickupAndDeliveryStep: React.FC<PickupAndDeliveryStepProps> = ({image, title, description, imageAlt}) => {
    return (
        <div>
            <h4 className={"text-primary-500"}>{title}</h4>
            <div className={"flex gap-2 h-28"}>
                <img src={image} alt={imageAlt} className={"w-1/2 object-contain"}/>
                <p className={"whitespace-pre-line"}>{description}</p>

            </div>
        </div>
    );
};

export default PickupAndDeliveryStep;