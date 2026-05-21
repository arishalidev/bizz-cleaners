import React from "react"
import { FaStar } from "react-icons/fa";

interface TrustStripProps {
    rating: number | null,
    userRatingCount: number | null
}

const TrustStrip: React.FC<TrustStripProps> = ({rating, userRatingCount} : TrustStripProps) => {
    return(
    <div className={"text-xl responsive-px limit-size"}>
        <div className={"mt-4 md:flex md:justify-around md:py-2 lg:max-w-5xl mx-auto"}>
            <h3 className={"font-semibold"}>30 Years of Quality Cleaning</h3>
            <span className={"inline-flex items-center gap-1"}>
                <FaStar className={"text-yellow-400"}/>
                <span className={"font-semibold"}>{rating}</span>({userRatingCount} Google Reviews)
            </span>
        </div>
        <hr className={"mt-3 text-primary-500"}/>
    </div>
    )
}

export default TrustStrip