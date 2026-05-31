import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

interface OwnersProps {

}

const Owners: React.FC<OwnersProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"flex flex-col gap-5 responsive-px limit-size py-10"}>
                <div className={"mx-auto lg:mt-2 w-full"}>
                    <SectionLabel>About Owners</SectionLabel>
                    <div className={"mt-4 max-w-5xl mx-auto w-full flex-col flex gap-4"}>
                        <Headline>Caring for clothes since 1996</Headline>

                        <Body className={"max-w-150"}>It started with one small shop in Bay City, Texas, back in 1996.
                            Three decades later,
                            we've run cleaners across the Houston area and as far north as Vancouver — and we've brought
                            everything we've learned to Flower Mound.</Body>

                        <Body className={"max-w-150"}>Decades in, there isn't much we haven't seen. But when something
                            new comes our way, we slow
                            down, ask questions, and make sure we get it right the first time.</Body>
                        <Body>— Farzana and Rehman</Body>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;