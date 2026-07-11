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
            {/*<h4 className={"text-primary-500 text-xl md:text-2xl font-semibold mb-6 md:mb-8 lg:mb-0 lg:h-16"}>{title}</h4>*/}
            <div className={"flex gap-4 md:h-48 md:gap-12 lg:flex-col lg:h-auto lg:gap-4"}>
                <img src={image} alt={imageAlt} className={"h-auto flex-1 w-1/2 lg:w-4/5 lg:mx-auto lg:aspect-square object-contain p-2 lg:p-0"}/>
                <div className={"flex flex-col gap-1 justify-center md:flex-1"}>
                    <Body><b>{title}. </b>{description}</Body>
                    <Body>{tagline}</Body>
                </div>
            </div>
        </div>
    );
};

export default PickupAndDeliveryHomeStep;