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
            <h4 className={"text-primary-500 text-xl font-semibold mb-3"}>{title}</h4>
            <div className={"flex gap-4"}>
                <img src={image} alt={imageAlt} className={"w-3/8 object-contain"}/>
                <p className={"whitespace-pre-line w-5/8"}>{description}</p>
            </div>
        </div>
    );
};

export default PickupAndDeliveryStep;