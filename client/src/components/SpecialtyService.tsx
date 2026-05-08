import { GoArrowRight } from "react-icons/go";

interface SpecialtyServiceProps {
    title: string;
    description: string;
    linkToPage: null;
    image: string;
    imageAlt: string;
}
function SpecialtyService({title, description, linkToPage, image, imageAlt}: SpecialtyServiceProps) {
    return (
        <div>
            <h3 className={"font-bold text-xl"}>{title}</h3>
            <p>{description}</p>
            <a className={"inline-flex items-center h-full gap-1 text-primary-700 font-semibold relative"}>Learn More<GoArrowRight/>
                <div className={"absolute h-1 bg-purple-100 w-full bottom-0.5"}></div>
            </a>
            <div className={"flex justify-center mt-4"}>
                <img className={"rounded-lg block w-6/8 h-52 object-cover"} src={image} alt={imageAlt}/>
            </div>
        </div>
    )
}

export default SpecialtyService