import Hero from "../components/Hero.tsx";
import TrustStrip from "../components/TrustStrip.tsx";
import Highlights from "../components/Highlights.tsx";
import SpecialtyServices from "../components/SpecialtyServices.tsx";
import PickupAndDelivery from "../components/PickupAndDelivery.tsx";

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