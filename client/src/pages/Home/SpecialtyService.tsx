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
        <div className={"md:max-w-200 lg:max-w-md"}>
            <div className={"flex justify-center mt-4"}>
                <img className={"rounded-lg block w-full aspect-square object-cover p-8"} src={image} alt={imageAlt}/>
            </div>
            <h3 className={"font-semibold text-xl md:text-2xl mb-2 mt-8 md:mb-4 md:mt-12"}>{title}</h3>
            <Body className={"my-1"}>{description}</Body>
            <div className={"mt-2"}>
                <Link to={link} className={"inline-flex items-center h-full gap-1 text-primary-400 font-semibold relative"}>
                    <Body>Learn More</Body><GoArrowRight className={"md:text-xl"}/>
                    <div className={"absolute h-1 bg-purple-200 w-full bottom-0.5"}></div>
                </Link>
            </div>
        </div>
    )
}

export default SpecialtyService