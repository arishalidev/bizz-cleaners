import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface SpecialtyServiceProps {
    title: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
}
function SpecialtyService({title, description, link, image, imageAlt}: SpecialtyServiceProps) {
    return (
        <div className={"mb-8"}>
            <h3 className={"font-bold text-xl"}>{title}</h3>
            <p>{description}</p>
            <Link to={link} className={"inline-flex items-center h-full gap-1 text-primary-700 font-semibold relative"}>Learn More<GoArrowRight/>
                <div className={"absolute h-1 bg-purple-100 w-full bottom-0.5"}></div>
            </Link>
            <div className={"flex justify-center mt-4"}>
                <img className={"rounded-lg block w-6/8 h-60 object-cover"} src={image} alt={imageAlt}/>
            </div>
        </div>
    )
}

export default SpecialtyService