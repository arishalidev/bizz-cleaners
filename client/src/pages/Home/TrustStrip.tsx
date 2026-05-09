import { FaStar } from "react-icons/fa";

function TrustStrip() {
    return(
    <div className={"text-xl"}>
        <h3><span className={"font-semibold"}>25 Years of Quality Cleaning</span></h3>
        <h3><span className={"inline-flex items-center gap-1"}><FaStar className={"text-yellow-400"} /> <span className={"font-semibold"}>4.7</span>(148 Google Reviews)</span></h3>
        <hr className={"mt-2 text-primary-500"}/>
    </div>
    )
}

export default TrustStrip