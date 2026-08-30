import React from 'react';
import Headline from "../../components/Headline.tsx";

interface PromoVideoProps {

}

const PromoVideo: React.FC<PromoVideoProps> = ({}) => {
    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline className={"mb-4"}>See our work in process</Headline>
            <iframe src="https://www.youtube.com/embed/dG6Hehlqy2M?si=kRnK2nATig-Q0XQx"
                    title="Bizz Cleaners Promo Video"
                    className={"w-full h-64 md:h-96 lg:h-117 block rounded-md"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </div>
    );
};

export default PromoVideo;