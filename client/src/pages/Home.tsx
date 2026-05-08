import Hero from "../components/Hero.tsx";
import TrustStrip from "../components/TrustStrip.tsx";
import Highlights from "../components/Highlights.tsx";
import SpecialtyService from "../components/SpecialtyService.tsx";

import specialty1 from "../assets/specialty1.jpg"


function Home() {
    return (
        <div>
            <Hero/>
            <TrustStrip/>
            <Highlights/>
            <SpecialtyService title={"Wedding Dresses"}
                              description={"Expert cleaning, long term security. Your gown stays as beautiful as the day you wore it — for daughters, granddaughters, or just memories."}
                              linkToPage={null}
                              image={specialty1}
                              imageAlt={"Wedding Dress"}/>
        </div>
    );
}
//
export default Home;