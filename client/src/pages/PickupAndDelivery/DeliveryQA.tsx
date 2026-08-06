import { IoIosArrowDown } from "react-icons/io";
import Body from "../../components/Body.tsx";

interface DeliveryQAProps {
    question: string,
    answer: string,
    expanded: boolean,
    onToggle: () => void,

}

const DeliveryQA: React.FC<DeliveryQAProps> = ({question, answer, expanded, onToggle}: DeliveryQAProps) => {
    return (
        <>
            <button className={`w-full py-2 hover:bg-neutral-50 ${expanded && "bg-neutral-50"}`} onClick={onToggle}>
            <span className={"flex items-center"}>
                <p className={`text-lg/7.5 md:text-xl/8 text-left w-fit`}>{question}</p>
                <span className={"flex-1"}></span>
                <IoIosArrowDown className={`text-lg ${expanded && "rotate-180"} transition-transform duration-500`}/>
                <span className={"w-4"}></span>
            </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-96 pt-4 pb-8" : "max-h-0"}`}>
                <Body>{answer}</Body>
            </div>
        </>

    );
};

export default DeliveryQA;