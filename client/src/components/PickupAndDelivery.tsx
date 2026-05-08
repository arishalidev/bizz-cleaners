import Headline from "./Headline.tsx";
import Bullet from "./Bullet.tsx";

function PickupAndDelivery() {
    return (
        <>
            <Headline>Pickup & Delivery</Headline>

            <p className={"mb-2"}>
                Let us take care of your clothes while you get
                on with your life!
            </p>

            <Bullet>No pickup or delivery fees* </Bullet>
            <Bullet> No pickup or delivery fees* </Bullet>
            <Bullet> Get hours of your week back </Bullet>
        </>


    )
}

export default PickupAndDelivery