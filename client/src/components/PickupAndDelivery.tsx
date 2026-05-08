import Headline from "./Headline.tsx";
import Bullet from "./Bullet.tsx";
import PickupAndDeliveryStep from "./PickupAndDeliveryStep.tsx";

import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"

function PickupAndDelivery() {
    return (
        <>
            <Headline>Pickup & Delivery</Headline>

            <p className={"mb-2"}>
                Let us take care of your clothes while you get
                on with your life!
            </p>

            <Bullet>No pickup or delivery fees* </Bullet> <br/>
            <Bullet> No pickup or delivery fees* </Bullet> <br/>
            <Bullet> Get hours of your week back </Bullet>

            <h3 className={"font-medium text-lg my-3"}>How it works</h3>

            <div className={"flex flex-col gap-3"}>
                <PickupAndDeliveryStep image={step1}
                                   description={"Pick a time and location that works for you.\n\nTakes less than a minute!"}
                                   title={"1. Schedule a pickup"}
                                   imageAlt={"A house, desk, and dry cleaners"}
            />

            <PickupAndDeliveryStep image={step2}
                                   description={"Set your bag outside on pickup day.\n\nNo need to be home!"}
                                   title={"2. Leave it at the door"}
                                   imageAlt={"A house, desk, and dry cleaners"}
            />

            <PickupAndDeliveryStep image={step3}
                                   description={"Get your clothes back, usually within 48 hours\n\nSimply sit back and relax."}
                                   title={"3. Get it back fresh"}
                                   imageAlt={"A house, desk, and dry cleaners"}
            />
            </div>


        </>


    )
}

export default PickupAndDelivery