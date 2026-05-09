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
        <div className={"flex flex-col gap-3 w-full rounded-md bg-primary-50 p-4 relative mb-12"}>
            <div className={"flex gap-6"}>
                <img src={headshot} alt={"Image of Happy Customer"} className={"h-14 rounded-full"}/>
                <div className={"flex flex-col gap-1"}>
                    <span className={"font-semibold"}>{name}</span>
                    <span className={"inline-flex items-center gap-1 text-[#fedf01] text-2xl"}>
                        {Array.from({length:5}, (_, i) => ( <IoStar key={i}/> ))}
                    </span>
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