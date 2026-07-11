import Headline from "../../components/Headline.tsx";
import PickupAndDeliveryHomeStep from "./PickupAndDeliveryHomeStep.tsx";

import step1 from "../../assets/deskWithComputer.png"
import step2 from "../../assets/deliveryVan.png"
import step3 from "../../assets/cleanClothes.png"
import deliveredClothes from "../../assets/deliveredClothes.png"
import Body from "../../components/Body.tsx";

function PickupAndDeliveryHome() {
    return (
        <div className={"bg-white"}>
            <div className={"limit-size responsive-px responsive-py"}>
                <div className={"flex flex-col gap-3"}>
                    <Headline className={"mt-1"}>Pickup and delivery that <br/> works around your day</Headline>

                    <Body className={"mt-2 max-w-150"}>
                        Finding time to drop off clothes isn't always easy. Some weeks you're juggling work, kids, errands, and a dozen other things. A trip to the dry cleaner can quickly turn into one more thing on the list.
                    </Body>

                    <Body>Our pickup and delivery service is designed to take that task off your plate.</Body>
                </div>

                <div className={"mt-6 md:mt-8 lg:mt-12 md:mx-auto"}>
                    <h3 className={`mt-10 mb-10 font-medium text-xl md:text-2xl`}>Our easy process</h3>

                    <div className={"flex flex-col gap-10 md:gap-16 lg:flex-row"}>
                        <PickupAndDeliveryHomeStep image={step1}
                                                   description={"Choose a pickup date through our online portal or mobile app."}
                                                   tagline={""}
                                                   title={"Schedule your pickup"}
                                                   imageAlt={""}/>

                        <PickupAndDeliveryHomeStep image={step2}
                                                   description={"Place your garments in your Bizz Cleaners weatherproof bag."}
                                                   tagline={"No need to wait at home."}
                                                   title={"Leave your bag outside"}
                                                   imageAlt={""}/>

                        <PickupAndDeliveryHomeStep image={step3}
                                                   description={"We'll clean, inspect, and return your items ready to wear."}
                                                   tagline={""}
                                                   title={"Receive freshly cleaned clothes"}
                                                   imageAlt={"Clean fresh clothes just the way you like them"}/>

                    </div>

                    <h3 className={`mt-10 font-medium text-xl md:text-2xl`}>Your clothes stay in our care</h3>

                    <div className={"flex flex-col lg:flex-row gap-4 mt-4"}>
                        <div>
                            <Body className={"max-w-150"}>
                            We don't use a third-party delivery company. The people picking up and delivering your
                            clothes work directly with our team, so your garments receive the same care and attention every step of
                            the way.</Body>
                        </div>


                        <img src={deliveredClothes} className={"lg:w-5/10"} alt={""}></img>
                    </div>
                    <div className={"mt-10 flex flex-col gap-2 lg:flex-row lg:gap-4"}>
                        <h3 className={`font-medium text-xl md:text-2xl lg:max-w-150 lg:mr-auto`}>Ready to start saving hours every month?</h3>
                        <div className={"lg:w-5/10"}><Body>Skip the trip to the dry cleaner and let us come to you.</Body></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PickupAndDeliveryHome