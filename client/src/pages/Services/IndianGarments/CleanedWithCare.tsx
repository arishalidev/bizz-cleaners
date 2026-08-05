import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";

interface CleanedWithCareProps {

}

const CleanedWithCare: React.FC<CleanedWithCareProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Cleaned with care</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>Many traditional garments feature rich colors and delicate details that need to be
                        protected during the cleaning process. Each item is cleaned individually according to its
                        fabric and color. This helps prevent color bleeding and allows us to give every garment the
                        attention it needs.</Body>

                    <Body>Special care is taken around embroidery, beadwork, zari, sequins, and other decorative
                        details that make these pieces unique.</Body>

                </div>
            </div>
        </div>
    );
};

export default CleanedWithCare;
