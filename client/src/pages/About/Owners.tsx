import React from 'react';
import SectionLabel from "../../components/SectionLabel.tsx";
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";

interface OwnersProps {

}

const Owners: React.FC<OwnersProps> = ({}) => {
    return (
        <div className={"flex flex-col gap-5 px-4 bg-white py-10"}>
            <div className={"inline-flex items-center gap-3"}>
                <div className={"rounded-full bg-primary-500 w-3 h-3"}></div>

                <SectionLabel>About Owners</SectionLabel>
            </div>
                <div className={"flex flex-col gap-4"}>
                    <Headline>Caring for clothes since 1996</Headline>
                    <Body>It started with one small shop in Bay City, Texas, back in 1996. Three decades later, we've run cleaners across the Houston area and as far north as Vancouver — and we've brought everything we've learned to Flower Mound.<br/><br/>
                        Decades in, there isn't much we haven't seen. But when something new comes our way, we slow down, ask questions, and make sure we get it right the first time.<br/><br/>
                        — [Rehman and Farzana]</Body>

                </div>
        </div>
    );
};

export default Owners;