import testimonialHeadshot1 from "../../assets/testimonialHeadshot1.jpg"
import testimonialHeadshot2 from "../../assets/testimonialHeadshot2.jpg"
import testimonialHeadshot3 from "../../assets/testimonialHeadshot3.jpg"
import Testimonial from "./Testimonial.tsx";
import Headline from "../../components/Headline.tsx";

import { IoStar } from "react-icons/io5";
import React from "react";
import Body from "../../components/Body.tsx";

const testimonials = [
    {
        headshot: testimonialHeadshot2,
        name: "Shaan S",
        review: "... Over the years I have exclusively been using this service because when I purchase clothes from overseas, no matter the age, these guys make it feel brand new. Recently, my house caught on fire, and I had that deep smoke smell in my entire collection, and to my surprise, they were able to tailor their cleaning process specifically to my needs, and again, left me pleased! I highly recommend this service, as a collector and enthusiast with very specific and rare garments, I would not go anywhere else!",
        key: 1,
    },
    {
        headshot: testimonialHeadshot1,
        name: "Debbie Herman",
        review: "Bizz Cleaners always does great work on our clothes. Staff is always polite and professional. Love their same day service! It's such a convenience especially for things needed at the last minute. Just had a prom dress dry cleaned and couldn't believe the extra touches they did. It came back with all straps laced up, on a bust, and a bag long enough for the dress and sealed at the bottom. Very impressive and greatly appreciated!",
        key: 2,
    },
    {
        headshot: testimonialHeadshot3,
        name: "Allan Cherry",
        review: "Efficient, friendly service! After having no luck finding a dry cleaner that can do same day (literally tried 3 places) they worked their magic and had my dry cleaning done by 5pm that day! Also, the staff is extremely helpful!! Offered to bring items to my car since I had a baby in a stroller :) thank you for being kind!",
        key: 3,
    },
]

interface TestimonialsProps {
    rating: number | null,
    userRatingCount: number | null
}

const Testimonials: React.FC<TestimonialsProps> = ({rating, userRatingCount} : TestimonialsProps) => {
    return (
        <div className={"responsive-px limit-size responsive-py"}>
            <div className={"md:mt-2"}>
                <Headline>See why Flower Mound customers keep coming back</Headline>
            </div>

            <div className={"inline-flex items-center gap-3 text-base md:mt-2"}>
                <Body className={"inline-flex gap-1 items-center"}>
                    <IoStar className={"text-[#fedf01] text-2xl"}/> <span className={"font-semibold"}> {rating}</span> Stars | <span className={"font-semibold"}>{userRatingCount}</span> Reviews</Body>
            </div>

            <div className={"flex flex-col gap-12 lg:grid lg:grid-cols-2 min-[1140px]:flex min-[1140px]:flex-row mt-12"}>
                {testimonials.map(testimonial =>
                <Testimonial headshot={testimonial.headshot}
                             name={testimonial.name}
                             review={testimonial.review}
                             key={testimonial.key}

                />
            )}
            </div>

        </div>
    );
}

export default Testimonials;