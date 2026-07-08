import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";

interface Highlight {
    Icon: IconType,
    text: string,
    description: string,
}


function Highlight({Icon, text, description}: Highlight) {
    return (
        <div>

            <div className={"grid grid-cols-[auto_1fr] gap-x-4"}>
                <div className={`flex w-fit gap-2 items-baseline-last`}>
                <span
                    className={"inline-flex w-14 h-14 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                    <Icon className={"text-3xl"}/>
                </span>
                </div>

                    <Body className={`font-semibold content-center`}>{text}</Body>
                    <Body className={"col-start-2"}>{description}</Body>
            </div>

        </div>
    )
}

export default Highlight