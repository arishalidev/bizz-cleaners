import testimonialHeadshot1 from "../../assets/testimonialHeadshot1.jpg"
import testimonialHeadshot2 from "../../assets/testimonialHeadshot2.jpg"
import testimonialHeadshot3 from "../../assets/testimonialHeadshot3.jpg"
import Testimonial from "./Testimonial.tsx";
import Headline from "../../components/Headline.tsx";

import { IoStar } from "react-icons/io5";
import React from "react";

const testimonials = [
    {
        headshot: testimonialHeadshot2,
        name: "Tom Palmer",
        review: "The absolute best! Genuinely caring staff and in all the time as a customer, where most cleaners routinely damaged my clothes, I have never had a single broken button. I most grateful to have a service provider who genuinely takes pride in their product!",
        key: 1,
    },
    {
        headshot: testimonialHeadshot1,
        name: "Hannah Robinson",
        review: "We are very happy with Bizz Cleaners on Long Prairie Road in Flower Mound. The turnaround time is quick, and our clothes are cleaned thoroughly with no chemical smell left behind. The staff is polite and helpful. We use Bizz Cleaners weekly and our clothes look great.\n",
        key: 2,
    },
    {
        headshot: testimonialHeadshot3,
        name: "Allan Cherry",
        review: "Bizz Cleaners always does great work on our clothes. Staff is always polite and professional. Love their same day service! It's such a convenience especially for things needed at the last minute. Just had a prom dress dry cleaned and couldn't believe the extra touches they did. It came back with all straps laced up, on a bust, and a bag long enough for the dress and sealed at the bottom. Very impressive and greatly appreciated!\n",
        key: 3,
    },
]

interface TestimonialsProps {
    rating: number | null,
    userRatingCount: number | null
}

const Testimonials: React.FC<TestimonialsProps> = ({rating, userRatingCount} : TestimonialsProps) => {
    return (
        <div className={"mt-8"}>
            <div className={"mx-5"}>
                <Headline>See Why We are Number One in Flower Mound</Headline>
            </div>

            <span className={"inline-flex items-center gap-3 text-base"}>
                <span>
                    <span className={"font-semibold"}>{rating}</span> Stars | <span className={"font-semibold"}>{userRatingCount}</span> Reviews</span>
                <span className={"inline-flex items-center gap-0.5"}>
                    {Array.from({length:5}, (_, i) => (
                    <IoStar className={"text-[#fedf01] text-2xl"} key={i}/>))}
                </span>
            </span>

            <div className={"my-10"}></div>

            {testimonials.map(testimonial =>
                <Testimonial headshot={testimonial.headshot}
                             name={testimonial.name}
                             review={testimonial.review}
                             key={testimonial.key}

                />
            )}
        </div>
    );
}

export default Testimonials;