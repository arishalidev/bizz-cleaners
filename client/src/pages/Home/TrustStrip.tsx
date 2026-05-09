import React from "react"
import { FaStar } from "react-icons/fa";

interface TrustStripProps {
    rating: number | null,
    userRatingCount: number | null
}

const TrustStrip: React.FC<TrustStripProps> = ({rating, userRatingCount} : TrustStripProps) => {
    return(
    <div className={"text-xl"}>
        <h3 className={"font-semibold"}>25 Years of Quality Cleaning</h3>
        <h3><span className={"inline-flex items-center gap-1"}> <FaStar className={"text-yellow-400"} /> <span className={"font-semibold"}>{rating}</span>({userRatingCount} Google Reviews)</span></h3>
        <hr className={"mt-2 text-primary-500"}/>
    </div>
    )
}

export default TrustStrip