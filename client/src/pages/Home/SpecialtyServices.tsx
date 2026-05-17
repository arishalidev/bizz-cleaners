import SpecialtyService from "./SpecialtyService.tsx";
import Headline from "../../components/Headline.tsx";

import specialty1 from "../../assets/specialty1.jpg"
import specialty2 from "../../assets/specialty2.jpg"
import specialty3 from "../../assets/specialty3.jpg"
import SectionLabel from "../../components/SectionLabel.tsx";

const specialtyServices = [
    {
        title: "Wedding Dresses",
        description: "Expert cleaning, long term security. Your gown stays as beautiful as the day you wore it — for daughters, granddaughters, or just memories.",
        link: "",
        image: specialty1 ,
        imageAlt: "Wedding Dress",
        key: 1,
    },
    {
        title: "Indian Clothes",
        description: "Sarees, lehengas, sherwanis, and intricate beadwork — handled with the care these garments deserve.",
        link: "",
        image: specialty2,
        imageAlt: "Indian Saree",
        key: 2,
    },
    {
        title: "Wash and Fold",
        description: "Timely, affordable, and perfectly folded every time. Save time for the things you love and leave your laundry with us.",
        link: "",
        image: specialty3,
        imageAlt: "Folded Clothes",
        key: 3,
    },]

function SpecialtyServices() {
    return (
        <div className={"text-white bg-neutral-900 responsive-px responsive-py"}>
            <div className={"limit-size"}>
                <SectionLabel className={"text-white"}> Specialty Services</SectionLabel>
                <Headline className={"mt-4"}>The right service at the right time</Headline>

                <div className={"flex flex-col gap-12 md:gap-18 mt-2 "}>
                    {specialtyServices.map(service =>
                        <SpecialtyService title={service.title}
                                          description={service.description}
                                          link={service.link}
                                          image={service.image}
                                          imageAlt={service.imageAlt}
                                          key={service.key}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SpecialtyServices