import React from 'react';
import Headline from "./Headline.tsx";
import Body from "./Body.tsx";
import Button from "./Button.tsx";
import {linkToDirections} from "../utils/links.ts";

interface IntroductionProps {
    image: string;
    imageAlt: string;
    headline: string;
    paragraphs: string[];
    primaryButtonLabel: string;
    primaryButtonAction: () => void;
    children?: React.ReactNode;
}

const Introduction: React.FC<IntroductionProps> = ({
    image,
    imageAlt,
    headline,
    paragraphs,
    primaryButtonLabel,
    primaryButtonAction,
    children,
}) => {
    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size-5xl pb-10 pt-6"}>

                <div className={"mr-auto pb-6 w-full"}>
                    <div className={"flex gap-8"}>
                        <Button className={"flex-1 md:flex-none md:w-56"} onClick={primaryButtonAction}>{primaryButtonLabel}</Button>
                        <Button className={"flex-1 md:flex-none md:w-56"} variant={"other"} onClick={linkToDirections}>Find us</Button>
                    </div>
                </div>

                <img className={"rounded-md mx-auto max-w-5xl w-full"} src={image} alt={imageAlt}/>

                <div className={"mx-auto lg:mt-2 w-full"}>
                    <Headline className={"my-4"}>{headline}</Headline>

                    <div className={"flex-col flex gap-4 max-w-150"}>
                        {paragraphs.map((paragraph, i) => <Body key={i}>{paragraph}</Body>)}
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default Introduction;
