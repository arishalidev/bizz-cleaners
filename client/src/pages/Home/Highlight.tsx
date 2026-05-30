import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";

interface HighlightProps {
    Icon: IconType,
    text: string,
}


function Highlight({Icon, text}: HighlightProps) {
    return (
        <div className={`flex flex-col w-fit items-center min-[850px]:flex-1`}>
            <span className={"inline-flex w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                <Icon className={"md:text-4xl"}/>
            </span>
            <Body className={`mt-2 font-semibold text-primary-500`}>{text}</Body>
        </div>
    )
}

export default Highlight