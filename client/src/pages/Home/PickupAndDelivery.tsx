import Headline from "../../components/Headline.tsx";
import Bullet from "../../components/Bullet.tsx";
import PickupAndDeliveryStep from "./PickupAndDeliveryStep.tsx";

import step1 from "../../assets/deskWithComputer.png"
import step2 from "../../assets/deliveryVan.png"
import step3 from "../../assets/cleanClothes.png"
import Button from "../../components/Button.tsx";

function PickupAndDelivery() {
    return (
        <div className={"px-4 pt-8 pb-18 bg-white"}>
            <div className={"flex flex-col gap-3"}>
                <Headline>Pickup & Delivery</Headline>

                <p>
                    Let us take care of your clothes while you get
                    on with your life!
                </p>

                <div>
                    <Bullet> No pickup or delivery fees* </Bullet> <br/>
                    <Bullet> Get hours of your week back </Bullet> <br/>
                    <Bullet> Schedule online in minutes </Bullet>
                </div>
            </div>

            <h3 className={"font-normal text-gray-600 tracking-wider text-sm mt-6 mb-1"}>How It Works</h3>

            <div className={"flex flex-col gap-8 mb-12"}>
                <PickupAndDeliveryStep image={step1}
                                   description={"Pick a time and location that works for you.\n\nTakes less than a minute!"}
                                   title={"1. Schedule a pickup"}
                                   imageAlt={""}
            />

            <PickupAndDeliveryStep image={step2}
                                   description={"Set your bag outside on pickup day.\n\nNo need to be home!"}
                                   title={"2. Leave it at the door"}
                                   imageAlt={""}
            />

            <PickupAndDeliveryStep image={step3}
                                   description={"Get your clothes back, usually within 48 hours\n\nSimply sit back and relax."}
                                   title={"3. Get it back fresh"}
                                   imageAlt={"Clean fresh clothes just the way you like them"}
            />
            </div>

            <Button className={"w-full"}>Book Now</Button>

        </div>


    )
}

export default PickupAndDelivery