import Headline from "../../components/Headline.tsx";
import Bullet from "../../components/Bullet.tsx";
import PickupAndDeliveryHomeStep from "./PickupAndDeliveryHomeStep.tsx";

import step1 from "../../assets/deskWithComputer.png"
import step2 from "../../assets/deliveryVan.png"
import step3 from "../../assets/cleanClothes.png"
import Body from "../../components/Body.tsx";
import SectionLabel from "../../components/SectionLabel.tsx";

function PickupAndDeliveryHome() {
    return (
        <div className={"bg-white"}>
            <div className={"limit-size responsive-px responsive-py"}>
                <div className={"flex flex-col gap-3"}>
                    <SectionLabel>Pickup & Delivery</SectionLabel>
                    <Headline className={"mt-4"}>We'll handle the laundry. You handle life</Headline>

                    <Body className={"mt-2"}>
                        Between work, family, and everything in between, getting to the cleaners shouldn't be one more errand. Let us take care of your clothes while you get on with your day.
                    </Body>

                    <div>
                        <Bullet> No pickup or delivery fees* </Bullet> <br/>
                        <Bullet> Get hours of your week back </Bullet> <br/>
                        <Bullet> Schedule online in minutes </Bullet>
                    </div>

                    <Body>Free on every order $25 and up.</Body>
                </div>

                <div className={"mt-4 md:mt-8 lg:mt-12 md:mx-auto"}>
                    <SectionLabel dot={false} className={"mb-4 md:mb-6"}>How It Works</SectionLabel>

                    <div className={"flex flex-col gap-10 md:gap-16 lg:flex-row"}>
                        <PickupAndDeliveryHomeStep image={step1}
                                                   description={"Pick a time and location that works for you."}
                                                   tagline={"Takes less than a minute."}
                                                   title={"1. Schedule a pickup"}
                                                   imageAlt={""}/>

                        <PickupAndDeliveryHomeStep image={step2}
                                                   description={"Set your bag outside on pickup day."}
                                                   tagline={"No need to be home!"}
                                                   title={"2. Leave it at the door"}
                                                   imageAlt={""}/>

                        <PickupAndDeliveryHomeStep image={step3}
                                                   description={"Get your clothes back, within 48 hours."}
                                                   tagline={"Simply sit back and relax."}
                                                   title={"3. Get it back fresh"}
                                                   imageAlt={"Clean fresh clothes just the way you like them"}/>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default PickupAndDeliveryHome