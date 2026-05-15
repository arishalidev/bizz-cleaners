import type {IconType} from "react-icons";

interface HighlightProps {
    Icon: IconType;
    text: string;
}


function Highlight({Icon, text}: HighlightProps) {
    return (
        <div className={"flex flex-col items-center w-fit"}>
            <span className={"inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                <Icon />
            </span>
            <span className={"mt-2 font-bold text-base text-primary-500"}>{text}</span>
        </div>
    )
}

export default Highlight