import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Body from "../../components/Body.tsx";

interface SpecialtyServiceProps {
    title: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
}
function SpecialtyService({title, description, link, image, imageAlt}: SpecialtyServiceProps) {
    return (
        <div className={"w-full mx-auto lg:max-w-135"}>
            <div className={"flex justify-center mt-4"}>
                <img className={"rounded-lg block w-full object-cover my-8 aspect-square max-h-112 lg:max-h-96"} src={image} alt={imageAlt}/>
            </div>
            <h3 className={"font-semibold text-xl md:text-2xl mb-2 md:mb-4 lg:mb-2"}>{title}</h3>
            <div className={"max-w-124 md:max-w-154"}>
                <Body className={"my-1"}>{description}</Body>
            </div>
            <div className={"mt-2"}>
                <Link to={link} className={"inline-flex items-center h-full gap-1 text-primary-400 font-semibold relative group hover:text-primary-500"}>
                    <Body>Learn More</Body><GoArrowRight className={"md:text-xl"}/>
                    <div className={"absolute h-1 bg-purple-200 w-full bottom-0.5 group-hover:bg-purple-300"}></div>
                </Link>
            </div>
        </div>
    )
}

export default SpecialtyService