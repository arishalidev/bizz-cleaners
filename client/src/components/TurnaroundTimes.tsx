import React from 'react';
import Headline from "./Headline.tsx";
import TurnaroundTime, {type TurnaroundItem} from "./TurnaroundTime.tsx";

interface TurnaroundTimesProps {
    headline: string;
    items: TurnaroundItem[];
    variant?: "stacked" | "inline";
}

const TurnaroundTimes: React.FC<TurnaroundTimesProps> = ({headline, items, variant}) => {
    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>{headline}</Headline>
            <div className={"mt-4 flex flex-col gap-4"}>
                {items.map((item, i) =>
                    <TurnaroundTime key={i} Icon={item.Icon} text={item.text} description={item.description}
                                     variant={variant}/>
                )}
            </div>
        </div>
    );
};

export default TurnaroundTimes;
