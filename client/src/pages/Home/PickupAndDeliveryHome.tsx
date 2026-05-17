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
        <div className={"responsive-px limit-size responsive-py bg-white lg:rounded-t-lg shadow-lg"}>
            <div className={"flex flex-col gap-3"}>
                <SectionLabel>Pickup & Delivery</SectionLabel>
                <Headline className={"mt-4"}>Pickup and Delivery Headline</Headline>

                <Body className={"mt-2"}>
                    Let us take care of your clothes while you get
                    on with your life!
                </Body>

                <div>
                    <Bullet> No pickup or delivery fees* </Bullet> <br/>
                    <Bullet> Get hours of your week back </Bullet> <br/>
                    <Bullet> Schedule online in minutes </Bullet>
                </div>
            </div>

            <div className={"mt-4 md:mt-8 lg:mt-16 md:max-w-175 md:mx-auto"}>
                <SectionLabel dot={false} className={"mb-4 md:mb-6"}>How It Works</SectionLabel>

                <div className={"flex flex-col gap-10 md:gap-16 lg:gap-28"}>
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
                                               description={"Get your clothes back, usually within 48 hours."}
                                               tagline={"Simply sit back and relax."}
                                               title={"3. Get it back fresh"}
                                               imageAlt={"Clean fresh clothes just the way you like them"}/>

                </div>
            </div>
        </div>


    )
}

export default PickupAndDeliveryHome