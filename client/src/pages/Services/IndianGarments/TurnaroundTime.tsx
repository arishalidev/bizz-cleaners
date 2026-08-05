import type {IconType} from "react-icons";
import Body from "../../../components/Body.tsx";

interface Highlight {
    Icon: IconType,
    image?: string,
    text: string,
    description: string,
    imageAlt?: string
}


function Highlight({Icon, text, description}: Highlight) {
    return (
        <div className={"flex-1"}>
            <div className={"flex flex-col"}>
                <div className={"mt-2"}>
                    <div className={"flex  gap-x-4"}>
                        <span
                        className={"inline-flex w-14 h-14 mt-1 bg-primary-100 rounded-xl items-center justify-center text-3xl"}>
                            <Icon className={"text-3xl"}/>
                        </span>
                        <div>
                            <p className={`text-lg/7.5 md:text-xl/8 font-medium`}>{text}</p>
                            <Body subtext={true} className={"max-w-125"}>{description}</Body>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Highlight
