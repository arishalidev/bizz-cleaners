import type {IconType} from "react-icons";
import Body from "../../../components/Body.tsx";

interface Highlight {
    Icon: IconType,
    image?: string,
    text: string,
    description: string,
    imageAlt?: string
}


function Highlight({Icon, text, description, image, imageAlt}: Highlight) {
    return (
        <div className={"mr-auto"}>
            <div className={"flex gap-x-4"}>
                <div className={"mt-2"}>
                <span className={"inline-flex w-14 h-14 bg-neutral-100 rounded-full items-center justify-center text-3xl"}>
                    <Icon className={"text-3xl text-primary-500"}/>
                </span>
                </div>

                <div>
                    <Body className={`font-semibold`}>{text}</Body>
                    <Body className={"max-w-90 md:max-w-120"}>{description}</Body>
                    {image && <img src={image} alt={imageAlt} className={"w-full mt-1 max-w-124"}/>}
                </div>
            </div>

        </div>
    )
}

export default Highlight