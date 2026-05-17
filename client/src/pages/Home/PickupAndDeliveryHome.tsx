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
        <div className={"responsive-px limit-size responsive-py bg-white"}>
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

            <h2 className={`font-normal text-gray-600 tracking-wider text-sm mt-6 mb-3`}>
                How It Works
            </h2>

            <div className={"flex flex-col gap-10 mb-12"}>
                <PickupAndDeliveryHomeStep image={step1}
                                           description={"Pick a time and location that works for you.\n\nTakes less than a minute!"}
                                           title={"1. Schedule a pickup"}
                                           imageAlt={""}
            />

            <PickupAndDeliveryHomeStep image={step2}
                                       description={"Set your bag outside on pickup day.\n\nNo need to be home!"}
                                       title={"2. Leave it at the door"}
                                       imageAlt={""}
            />

            <PickupAndDeliveryHomeStep image={step3}
                                       description={"Get your clothes back, usually within 48 hours\n\nSimply sit back and relax."}
                                       title={"3. Get it back fresh"}
                                       imageAlt={"Clean fresh clothes just the way you like them"}
            />
            </div>
        </div>


    )
}

export default PickupAndDeliveryHome