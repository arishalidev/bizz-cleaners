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
        <div>
            <h3 className={"font-medium text-lg"}>{title}</h3>
            <p className={"my-1"}>{description}</p>
            <Link to={link} className={"inline-flex items-center h-full gap-1 text-primary-400 font-semibold relative"}>Learn More<GoArrowRight/>
                <div className={"absolute h-1 bg-purple-200 w-full bottom-0.5"}></div>
            </Link>
            <div className={"flex justify-center mt-4"}>
                <img className={"rounded-lg block w-7/8 h-60 object-cover"} src={image} alt={imageAlt}/>
            </div>
        </div>
    )
}

export default SpecialtyService