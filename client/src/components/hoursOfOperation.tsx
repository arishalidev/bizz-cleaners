import React from 'react';
import Body from "./Body.tsx";

interface hoursOfOperationProps {
    hoursOfOperation: string[]
}

const hoursOfOperation: React.FC<hoursOfOperationProps> = ({hoursOfOperation} : hoursOfOperationProps) => {
    return (
        <div className={"flex gap-4 mt-2 w-fit"}>
            <div className={"flex flex-col"}>
                {hoursOfOperation.map((day, i) =>
                    <div key={i} className={"flex flex-col"}>
                        {(((new Date().getDay() + 6) % 7)) === i ? (
                            <Body className={"font-semibold"}>{day.split(":")[0]}</Body>
                        ) : (
                            <Body>{day.split(":")[0]}</Body>
                        )}
                    </div>
                )}
            </div>

            <div className={"flex flex-col"}>
                {hoursOfOperation.map((day, i) =>
                    <div key={i} className={"flex flex-col"}>
                        {(((new Date().getDay() + 6) % 7)) === i ? (
                            <Body
                                className={"font-semibold"}>{day.slice(day.indexOf(":") + 1)}</Body>
                        ) : (
                            <Body>{day.slice(day.indexOf(":") + 1)}</Body>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default hoursOfOperation;