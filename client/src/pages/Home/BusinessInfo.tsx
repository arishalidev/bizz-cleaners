import React from "react"
import businessInfo from "../../assets/businessInfo.jpg"
import Headline from "../../components/Headline.tsx";

interface BusinessInfoProps {
    hoursOfOperation: string[],
    isOpen: boolean | undefined
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ hoursOfOperation, isOpen } : BusinessInfoProps) => {

    return (
        <div className={"flex flex-col gap-5 bg-white px-4 py-10"}>
            <Headline>Visit Us Today</Headline>
            <img src={businessInfo} alt={"Font of Bizz Cleaners store"} className={"rounded-md drop-shadow-md"}/>
            <div className={"flex gap-3"}>
                <div className={"w-3 h-auto bg-primary-500"}></div>
                <div className={"flex flex-col gap-5"}>
                    <a>2201 Long Prairie Rd #103, <br/> Flower Mound, TX 75022</a>

                    <div>
                        {isOpen === undefined ? (
                            <div></div>
                        ) : isOpen ? (
                            <h3 className={"font-semibold text-primary-500 mb-1"}>Open Now</h3>
                        ) : (
                            <h3 className={"font-semibold text-red-500 mb-1"}>Closed</h3>
                        )}

                        <div className={"flex gap-4" }>

                            <div className={"flex flex-col"}>

                            {hoursOfOperation.map((day, i) =>
                                <div key={i} className={"flex flex-col"}>
                                    {(((new Date().getDay() + 6) % 7)) === i ? (
                                        <p className={"font-semibold"}>{day.split(":")[0]}</p>
                                    ): (
                                        <p>{day.split(":")[0]}</p>
                                    )}
                                </div>
                            )}
                            </div>

                            <div className={"flex flex-col"}>
                                {hoursOfOperation.map((day, i) =>
                                    <div key={i} className={"flex flex-col"}>
                                        {(((new Date().getDay() + 6) % 7)) === i ? (
                                            <p className={"font-semibold"}>{day.slice(day.indexOf(":") + 1)}</p>
                                        ): (
                                            <p>{day.slice(day.indexOf(":") + 1)}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-col"}>
                        <u><a href={"tel:+19723551807"}>+1 972-355-1807</a></u>
                        <u><a href={"mailto:business@bizzclean.com"}>business@bizzclean.com</a></u>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;