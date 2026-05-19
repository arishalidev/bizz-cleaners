import React from 'react';
import { IoStar } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";
import Body from "../../components/Body.tsx";

interface TestimonialProps {
    headshot: string,
    name: string,
    review: string,
}

const Testimonial: React.FC<TestimonialProps> = ({headshot, name, review}: TestimonialProps) => {
    return (
        <div className={"flex flex-col gap-3 w-full rounded-md bg-primary-50 px-4 pb-10 pt-5 relative shadow-md"}>
            <div className={"flex gap-6 items-center"}>
                <img src={headshot} alt={"Image of Happy Customer"} className={"aspect-square w-15 rounded-full"}/>
                <div className={"flex flex-col"}>
                    <Body className={"font-semibold"}>{name}</Body>
                    <span className={"text-sm -mt-1"}>Verified Customer</span>

                    <span className={"inline-flex items-center gap-1 text-[#fedf01] text-2xl mt-2"}>
                    {Array.from({length: 5}, (_, i) => (<IoStar key={i}/>))}
                    </span>

                </div>
            </div>

            <hr className={"text-primary-500"}/>

            <Body>
                {review}
            </Body>

            <span className={"flex text-6xl absolute right-2 -top-6 text-primary-600"}><FaQuoteRight/></span>

        </div>
    );
};

export default Testimonial;