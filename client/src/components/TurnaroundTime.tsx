import type {IconType} from "react-icons";
import Body from "./Body.tsx";

export interface TurnaroundItem {
    Icon: IconType;
    text: string;
    description: string;
}

interface TurnaroundTimeProps extends TurnaroundItem {
    variant?: "stacked" | "inline";
}

const TurnaroundTime: React.FC<TurnaroundTimeProps> = ({Icon, text, description, variant = "stacked"}) => {

    if (variant === "inline") {
        return (
            <div className={"flex-1"}>
                <div className={"flex flex-col"}>
                    <div className={"mt-2"}>
                        <div className={"flex gap-x-4"}>
                        <span
                            className={"inline-flex mt-1 w-14 h-14 bg-primary-100 rounded-xl items-center justify-center text-3xl"}>
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
        );
    }

    return (
        <div className={"mr-auto"}>
            <div className={"flex flex-col"}>
                <div className={"mt-2"}>
                    <div className={"flex items-center gap-x-4"}>
                        <span
                            className={"inline-flex w-14 h-14 bg-primary-100 rounded-xl items-center justify-center text-3xl"}>
                            <Icon className={"text-3xl"}/>
                        </span>
                        <p className={`text-lg/7.5 md:text-xl/8`}>{text}
                        </p>
                    </div>

                </div>

                <div className={"mt-1"}>
                    <Body subtext={true}>{description}</Body>
                </div>
            </div>

        </div>
    );
};

export default TurnaroundTime;
