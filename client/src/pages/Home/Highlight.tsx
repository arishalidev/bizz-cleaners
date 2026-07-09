import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";

interface Highlight {
    Icon: IconType,
    image?: string,
    text: string,
    description: string,
}


function Highlight({Icon, text, description, image}: Highlight) {
    return (
        <div>
            <div className={"flex gap-x-4"}>
                <div className={"mt-2"}>
                <span className={"inline-flex w-14 h-14 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                    <Icon className={"text-3xl"}/>
                </span>
                </div>

                <div>
                    <Body className={`font-semibold`}>{text}</Body>
                    <Body className={"col-start-2"}>{description}</Body>
                    {image && <img src={image} alt={"Drop off box located at the front of our store"} className={"w-full mt-1"}/>
                    }

                </div>
            </div>

        </div>
    )
}

export default Highlight