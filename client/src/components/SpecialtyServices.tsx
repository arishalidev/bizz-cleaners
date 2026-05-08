import SpecialtyService from "../components/SpecialtyService.tsx";
import Headline from "./Headline.tsx";

import specialty1 from "../assets/specialty1.jpg"
import specialty2 from "../assets/specialty2.jpg"
import specialty3 from "../assets/specialty3.jpg"

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
        <div className={"my-8"}>
            <Headline> Specialty Services</Headline>

            {specialtyServices.map(service =>
                <SpecialtyService title={service.title}
                                  description={service.description}
                                  link={service.link}
                                  image={service.image}
                                  imageAlt={service.imageAlt}
                                  key={service.key}/>
            )}

        </div>
    )
}

export default SpecialtyServices