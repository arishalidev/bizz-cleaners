import React from 'react';

interface PickupAndDeliveryStepProps {
    image: string,
    imageAlt: string,
    title: string,
    description: string,
}

const PickupAndDeliveryStep: React.FC<PickupAndDeliveryStepProps> = ({image, title, description, imageAlt}) => {
    return (
        <>
            <h4 className={"text-primary-500 my-1"}>{title}</h4>
            <div className={"flex gap-2"}>
                <img src={image} alt={imageAlt} className={"w-1/2"}/>
                <p className={"whitespace-pre-line"}>{description}</p>

            </div>
        </>
    );
};

export default PickupAndDeliveryStep;