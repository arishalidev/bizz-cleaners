import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import {IoStar} from "react-icons/io5";
import Bullet from "../../components/Bullet.tsx";
import shirtInspected from "../../assets/shirtInspected.jpg"

interface OurPromiseProps {

}

const OurPromise: React.FC<OurPromiseProps> = ({}) => {
    return (
        <div className={"bg-white"}>
            <div className={"limit-size-5xl responsive-px responsive-py"}>
                <Headline>Our promise to you</Headline>
                <h3 className={"text-xl md:text-2xl mt-6 lg:mt-8"}>Garment care you can feel good about</h3>
                <div className={"flex flex-col gap-2 mt-3 lg:mt-4 max-w-150"}>
                    <Body>Leaving your favorite clothes with someone else takes trust. If it's a suit you wear every
                    week, a comforter your family sleeps under, or a wedding dress you'll keep for years to come, you
                    deserve to feel confident it's in good hands.</Body>
                    <Body>That's why we stand behind our work.</Body>
                    <Body>If you're ever unhappy with the way an item comes back, let us know.</Body>
                    <Body>We'll gladly re-clean the garment whenever possible. If you're still not satisfied, we'll
                        provide store credit for the amount you paid to have the item cleaned.</Body>
                    <Body>That's the level of service we'd want ourselves, and it's the standard we hold ourselves to
                        every day.</Body>
                </div>

                <div className={"flex flex-col items-center mt-12"}>
                    <Headline>100% Satisfaction guarantee </Headline>
                    <div
                        className={"inline-flex items-center gap-1 text-[#fedf01] text-4xl lg:text-5xl lg:mt-4 mt-3"}>
                        {Array.from({length: 5}, (_, i) => (<IoStar key={i}/>))}
                    </div>
                </div>

                <div className={"flex flex-col w-9/10 mx-auto"}>
                    <div className={"flex-col flex gap-3 mt-8 max-w-175 "}>
                        <Bullet>Re-cleaning when needed</Bullet>
                        <Bullet>Fair solutions when problems arise</Bullet>
                        <Bullet>A local team that stands behind its work</Bullet>
                    </div>

                    <img className={"mt-4"} src={shirtInspected} alt={"Dress shirt being inspected"}/>
                </div>

            </div>
        </div>
    );
};

export default OurPromise;