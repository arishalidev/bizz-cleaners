import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";

interface HighlightProps {
    Icon: IconType,
    text: string,
    centerIcon?: boolean,
    textGreen?: boolean,
}


function Highlight({Icon, text, centerIcon = true, textGreen = true}: HighlightProps) {
    return (
        <div className={`flex flex-col w-fit ${centerIcon && 'items-center'}`}>
            <span className={"inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                <Icon />
            </span>
            <Body className={`mt-2 font-semibold ${textGreen && 'text-primary-500'}`}>{text}</Body>
        </div>
    )
}

export default Highlight