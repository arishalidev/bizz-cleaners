import type {IconType} from "react-icons";
import Body from "./Body.tsx";

export interface HighlightItem {
    Icon: IconType;
    text: string;
    description: string;
    image?: string;
    imageAlt?: string;
}

interface HighlightProps extends HighlightItem {
    badge?: "primary" | "neutral";
    descriptionClassName?: string;
}

function Highlight({
    Icon,
    text,
    description,
    image,
    imageAlt,
    badge = "primary",
    descriptionClassName = "max-w-90 md:max-w-120",
}: HighlightProps) {

    const badgeClassName = badge === "neutral" ? "bg-neutral-100" : "bg-primary-100";
    const iconClassName = badge === "neutral" ? "text-3xl text-primary-500" : "text-3xl";

    return (
        <div className={"mr-auto"}>
            <div className={"flex gap-x-4"}>
                <div className={"mt-2"}>
                <span className={`inline-flex w-14 h-14 ${badgeClassName} rounded-full items-center justify-center text-3xl`}>
                    <Icon className={iconClassName}/>
                </span>
                </div>

                <div>
                    <Body className={`font-semibold`}>{text}</Body>
                    <Body className={descriptionClassName}>{description}</Body>
                    {image && <img src={image} alt={imageAlt} className={"w-full mt-1 max-w-124"}/>}
                </div>
            </div>

        </div>
    )
}

export default Highlight
