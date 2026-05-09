import React from 'react';
import { IoStar } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";

interface TestimonialProps {
    headshot: string,
    name: string,
    review: string,
}

const Testimonial: React.FC<TestimonialProps> = ({headshot, name, review}: TestimonialProps) => {
    return (
        <div className={"flex flex-col gap-3 w-full rounded-md bg-primary-50 p-4 relative"}>
            <div className={"flex gap-6"}>
                <img src={headshot} className={"h-14 rounded-full"}/>
                <div className={"flex flex-col"}>
                    <span>{name}</span>
                    <span className={"inline-flex items-center gap-1 text-[#fedf01] text-3xl"}><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span>
                </div>
            </div>

            <hr className={"text-primary-500"}/>

            <p className={"text-base/7 font-normal"}>
                {review}
            </p>

            <span className={"flex text-6xl absolute right-2 -top-6 text-primary-600"}><FaQuoteRight/></span>

        </div>
    );
};

export default Testimonial;