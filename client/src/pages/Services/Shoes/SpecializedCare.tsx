import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import acidFree from "../../../assets/weddingDressAcidFree.jpg";

interface SpecializedCareProps {

}

const SpecializedCare: React.FC<SpecializedCareProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>

            <div className={"responsive-px responsive-py limit-size-5xl"}>
                <Headline className={"my-4"}>Specialized care for delicate gowns</Headline>
                <div className={"flex-col flex gap-4 max-w-150"}>

                    <Body>Wedding dresses take a little more time and attention than most garments. Between the
                        lace, beading, embroidery, and delicate fabrics, every gown has its own set of
                        things to look out for.</Body>
                    <Body>Before we start cleaning, we take a close look at the dress and make a plan based on
                        the fabric, the details, and any areas that need special attention. Some gowns need
                        a gentler approach than others, and experience goes a long way.</Body>
                    <Body>Over the years, we've cleaned and preserved more than 500 wedding dresses. We've seen
                        all kinds of fabrics, styles, and stains, and we know how important it is to get
                        things right.</Body>

                </div>
                <img className={"rounded-md mx-auto max-w-5xl w-full mt-12"} src={acidFree}
                     alt={"Leather jackets, nicely pressed."}/>

            </div>
        </div>
    );
};

export default SpecializedCare;