import Hero from "./Hero.tsx";
import TrustStrip from "./TrustStrip.tsx";
import Highlights from "./Highlights.tsx";
import SpecialtyServices from "./SpecialtyServices.tsx";
import PickupAndDelivery from "./PickupAndDelivery.tsx";
import Testimonial from "./Testimonial.tsx";

import testimonialHeadshot1 from "../../assets/testimonialHeadshot1.jpg"

function Home() {
    return (
        <div>
            <Hero/>
            <div className={"mx-4"}>
                <TrustStrip/>
                <Highlights/>
                <SpecialtyServices/>
                <PickupAndDelivery/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Testimonial headshot={testimonialHeadshot1}  name={"Jemmy Aniruddha"} review={"We are very happy with Bizz Cleaners on Long Prairie Road in Flower Mound. The turnaround time is quick, and our clothes are cleaned thoroughly with no chemical smell left behind. The staff is polite and helpful. We use Bizz Cleaners weekly and our clothes look great."}/>

                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
}
//
export default Home;