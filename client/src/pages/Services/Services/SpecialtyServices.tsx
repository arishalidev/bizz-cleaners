import SpecialtyService from "./SpecialtyService.tsx";

import specialty1 from "../../../assets/weddingDress.jpg"
import specialty2 from "../../../assets/indianGarments.jpg"
import specialty3 from "../../../assets/foldedClothes.jpg"
import specialty4 from "../../../assets/suitsDryCleaned.jpg"
import householdItems from "../../../assets/foldedBlankets.jpg";
import shirts from "../../../assets/LaundryShirts.jpg";
import leatherJackets from "../../../assets/leatherJackets.jpg";
import shoes from "../../../assets/shoes.jpg";



import Body from "../../../components/Body.tsx";

const specialtyServices = [
    {
        title: "Wedding dress cleaning & preservation",
        description: "From intricate beading and lace to delicate silk fabrics, we carefully clean and preserve wedding gowns so they remain beautiful for years to come.",
        link: "/wedding",
        image: specialty1 ,
        imageAlt: "Wedding Dress",
        key: 1,
    },
    {
        title: "Indian garments",
        description: "Sarees, lehengas, sherwanis, and embroidered garments require specialized care. We clean and press each piece individually to protect colors, embellishments, and fine details.",
        link: "/indian-garments",
        image: specialty2,
        imageAlt: "Indian Saree",
        key: 2,
    },
    {
        title: "Dry cleaning",
        description: "Professional garment care for suits, dresses, business attire, and everyday clothing.",
        link: "/dry-cleaning",
        image: specialty4,
        imageAlt: "Folded Clothes",
        key: 3,
    },
    {
        title: "Dress Shirts",
        description: "Clean collars, crisp pressing, starch options, and complimentary button replacement when needed.",
        link: "/laundry-shirts",
        image: shirts,
        imageAlt: "Dress shirts",
        key: 3,
    },
    {
        title: "Leather",
        description: "Specialized cleaning for leather jackets, coats, pants, skirts, and more.",
        link: "/leather",
        image: leatherJackets,
        imageAlt: "Leather jackets",
        key: 3,
    },
    {
        title: "Household Items",
        description: "Comforters, blankets, pillows, curtains, and stuffed animals cleaned and refreshed.",
        link: "/household",
        image: householdItems,
        imageAlt: "Blankets folded",
        key: 3,
    },
    {
        title: "Wash & fold laundry",
        description: "Save time with professional wash and fold service. Your clothes are sorted, cleaned, folded, and packaged neatly for pickup or delivery.",
        link: "/wash-and-fold",
        image: specialty3,
        imageAlt: "Folded Clothes",
        key: 3,
    },
    {
        title: "Shoes & Repair",
        description: "Professional shoe cleaning and access to local repair services.",
        link: "/shoes",
        image: shoes,
        imageAlt: "shoes",
        key: 3,
    },
]

function SpecialtyServices() {

    return (
        <div className={"bg-white"}>
            <div className={"limit-size-5xl responsive-px responsive-py"}>
                <div className={"flex flex-col gap-3"}>
                    <Body className={"max-w-150 -mt-4 mb-8"}>Not every garment should be treated the same way. Our team has extensive
                        experience caring for specialty fabrics and delicate items that require extra special attention.</Body>
                </div>

                <div className={"flex flex-col gap-12 md:gap-18"}>
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