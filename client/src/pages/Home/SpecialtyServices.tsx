import SpecialtyService from "./SpecialtyService.tsx";
import Headline from "../../components/Headline.tsx";

import specialty1 from "../../assets/weddingDress.jpg"
import specialty2 from "../../assets/indianGarments.jpg"
import specialty3 from "../../assets/foldedClothes.jpg"
import specialty4 from "../../assets/suitsDryCleaned.jpg"
import Body from "../../components/Body.tsx";
import Button from "../../components/Button.tsx";
import {useNavigate} from "react-router-dom";

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
        title: "Dry cleaning",
        description: "Professional garment care for suits, dresses, business attire, and everyday clothing.",
        link: "/dry-cleaning",
        image: specialty4,
        imageAlt: "Folded Clothes",
        key: 3,
    },]

function SpecialtyServices() {

    const navigate = useNavigate();

    return (
        <div className={""}>
            <div className={"limit-size responsive-px responsive-py"}>
                <div className={"flex flex-col gap-3 lg:flex-row"}>
                    <div>
                        <Headline>Specialty cleaning services</Headline>
                        <Button variant={"other"} className={"mt-5 hidden lg:block"} onClick={() => navigate("/services")}>See all our services</Button>
                    </div>

                    <Body subtext={true} className={"max-w-120 lg:ml-auto lg:mt-1"}>Not every garment should be treated the same way. Our team has extensive
                        experience caring for specialty fabrics and delicate items that require extra special attention.</Body>
                    <div>
                        <Button variant={"other"} className={" block lg:hidden"} onClick={() => navigate("/services")}>See all our services</Button>
                    </div>
                </div>

                <div className={"flex flex-col gap-12 md:gap-18 lg:grid lg:grid-cols-2"}>
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