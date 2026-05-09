import Hero from "./Hero.tsx";
import TrustStrip from "./TrustStrip.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDelivery from "./PickupAndDelivery.tsx";

function Home() {
    return (
        <div>
            <Hero/>
            <div className={"mx-4"}>
                <TrustStrip/>
                <Highlights/>
                <SpecialtyServices/>
                <PickupAndDelivery/>
            </div>
        </div>
    );
}
//
export default Home;