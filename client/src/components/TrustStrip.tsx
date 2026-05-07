import { FaStar } from "react-icons/fa";

function TrustStrip() {
    return(
    <div className={"m-4 text-2xl"}>
        <h3>25 Years of Quality Cleaning</h3>
        <h3><span className={"inline-flex items-center gap-1"}><FaStar className={"text-yellow-400"} /> 4.7 (148 Google Reviews)</span></h3>
        <hr className={"mt-2 text-primary-500"}/>
    </div>
    )
}

export default TrustStrip