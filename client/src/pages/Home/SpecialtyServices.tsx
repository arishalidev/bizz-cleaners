import SpecialtyService from "./SpecialtyService.tsx";
import Headline from "../../components/Headline.tsx";

import specialty1 from "../../assets/sp1.png"
import specialty2 from "../../assets/sp2.png"
import specialty3 from "../../assets/sp3.png"
import specialty4 from "../../assets/sp4.png"

const specialtyServices = [
    {
        title: "Wedding dress cleaning & preservation",
        description: "From intricate beading and lace to delicate silk fabrics, we carefully clean and preserve wedding gowns so they remain beautiful for years to come.",
        link: "",
        image: specialty1 ,
        imageAlt: "Wedding Dress",
        key: 1,
    },
    {
        title: "Indian garments",
        description: "Sarees, lehengas, sherwanis, and embroidered garments require specialized care. We clean and press each piece individually to protect colors, embellishments, and fine details.",
        link: "",
        image: specialty2,
        imageAlt: "Indian Saree",
        key: 2,
    },
    {
        title: "Wash & fold laundry",
        description: "Save time with professional wash and fold service. Your clothes are sorted, cleaned, folded, and packaged neatly for pickup or delivery.",
        link: "",
        image: specialty3,
        imageAlt: "Folded Clothes",
        key: 3,
    },
    {
        title: "Dry Cleaning",
        description: "Professional garment care for suits, dresses, business attire, and everyday clothing.",
        link: "",
        image: specialty4,
        imageAlt: "Folded Clothes",
        key: 3,
    },]

function SpecialtyServices() {
    return (
        <div className={""}>
            <div className={"limit-size responsive-px responsive-py"}>
                <Headline className={"mt-4"}>Specialty cleaning services</Headline>

                <div className={"flex flex-col gap-12 md:gap-18 mt-2 lg:grid lg:grid-cols-2"}>
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