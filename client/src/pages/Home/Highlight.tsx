import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";
import React from "react";

interface HighlightProps {
    Icon: IconType,
    text: string,
    highlightId: number
    setModal: React.Dispatch<React.SetStateAction<number | undefined>>;

}


function Highlight({Icon, text, highlightId, setModal}: HighlightProps) {
    return (
        <button className={`group flex flex-col w-fit items-center min-[850px]:flex-1`} onClick={() => setModal(highlightId)}>
            <span className={"inline-flex w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                <span className={"inline-flex w-15 h-15 md:w-18 md:h-18 group-hover:bg-primary-200 rounded-full items-center justify-center text-3xl"}>
                    <Icon className={"md:text-4xl"}/>
                </span>
            </span>
            <Body className={`mt-2 font-semibold text-primary-500`}>{text}</Body>
        </button>
    )
}

export default Highlight