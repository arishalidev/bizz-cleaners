import type {IconType} from "react-icons";
import Body from "../../components/Body.tsx";

interface DeliveryHighlightProps {
    Icon: IconType,
    text: string,
}


function DeliveryHighlight({Icon, text}: DeliveryHighlightProps) {
    return (
        <div className={`flex flex-col w-fit gap-2`}>
            <span className={"inline-flex w-16 h-16 bg-primary-100 rounded-full items-center justify-center text-3xl"}>
                <Icon />
            </span>
            <Body className={`mt-2 font-semibold`}>{text}</Body>
        </div>
    )
}

export default DeliveryHighlight