import React from "react"
import businessInfo from "../../assets/businessInfo.jpg"
import Headline from "../../components/Headline.tsx";
import Button from "../../components/Button.tsx";

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
                    <a href={"https://maps.app.goo.gl/92ihpSMbvt3e5YLK6"}>2201 Long Prairie Rd <br/> Flower Mound, TX 75022</a>

                    <div>
                        {isOpen === undefined ? (
                            <div></div>
                        ) : isOpen ? (
                            <h3 className={"font-semibold text-primary-500 mb-1"}>Open Now</h3>
                        ) : (
                            <h3 className={"font-semibold text-red-500 mb-1"}>Closed</h3>
                        )}

                        <div className={"flex gap-4"}>

                            <div className={"flex flex-col"}>

                                {hoursOfOperation.map((day, i) =>
                                    <div key={i} className={"flex flex-col"}>
                                        {(((new Date().getDay() + 6) % 7)) === i ? (
                                            <p className={"font-semibold"}>{day.split(":")[0]}</p>
                                        ) : (
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
                                        ) : (
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

            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.564529369901!2d-97.07125436071318!3d33.01525459620687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2d1f87b1e3d5%3A0xce319181104f911a!2sBizz%20Cleaners!5e0!3m2!1sen!2sus!4v1778693139746!5m2!1sen!2sus"}
                    allowFullScreen={true}
                    loading={"lazy"}
                    referrerPolicy={"no-referrer-when-downgrade"}
                    className={"h-96"}/>

            <div className={"flex gap-8 mt-6"}>
                <Button>Schedule Pickup</Button>
                <Button variant={"secondary"} className={"outline-2"} >Get Directions</Button>
            </div>
</div>
)
    ;
};

export default BusinessInfo;