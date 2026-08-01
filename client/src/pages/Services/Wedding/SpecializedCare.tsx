import React from 'react';
import Headline from "../../../components/Headline.tsx";
import Body from "../../../components/Body.tsx";
import weddingDressInBox from "../../../assets/weddingDressPreserved.jpg";
import acidFree from "../../../assets/weddingDressAcidFree.jpg";

interface SpecializedCareProps {

}

const SpecializedCare: React.FC<SpecializedCareProps> = ({}) => {
    return (
        <div className={"bg-white -mt-8 md:-mt-16"}>
            <div className={"relative max-w-6xl mx-auto h-fit"}>
                <div className={"responsive-px max-w-5xl md:aspect-3/2 mx-auto responsive-py"}>
                    <div className={"flex flex-col lg:flex-row gap-5"}>
                        <div>
                            <Headline>Specialized care for delicate gowns</Headline>
                            <div className={"flex-col flex gap-3 mt-8 md:max-w-3/5"}>
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

                        </div>

                        <img className={"hidden md:block md:right-12 md:top-24 absolute w-5/16 lg:object-contain"}
                             alt={"Wedding dress in preservation box"} src={weddingDressInBox}/>

                        <img className={"block md:hidden w-3/4 lg:w-2/4 lg:max-h-130 lg:object-contain"} alt={"Clothes being carried to house, symbolizing trust"} src={weddingDressInBox}/>
                    </div>

                    <img className={"rounded-md mx-auto max-w-5xl w-full mt-12"} src={acidFree}
                         alt={"Leather jackets, nicely pressed."}/>

                </div>
            </div>
        </div>
    );
};

export default SpecializedCare;