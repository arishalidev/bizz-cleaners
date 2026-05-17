import '../../App.css';
import heroImage from '../../assets/hero-image.jpg';
import Button from "../../components/Button.tsx";
import Body from "../../components/Body.tsx";

function Hero() {
    return (
        <div className={"relative"}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"block w-full object-cover min-h-105 lg:max-h-180"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"responsive-px limit-size"}>
                <div className={"absolute top-24 text-white space-y-2"}>
                    <h1 className={"text-3xl font-semibold md:text-5xl lg:text-6xl md:mb-5"}>Flower Mound’s<br/> Trusted Dry Cleaners</h1>
                    <h2 className={"text-xl font-normal md:text-2xl lg:text-4xl"}>Same Day Services <br/> Free Pickup and Delivery</h2>

                    <div className={"mt-12 lg:mt-20 flex space-x-4 md:space-x-6 lg:space-x-10"}>
                        <Button variant={"primary"}>Schedule Pickup</Button>
                        <Button variant={"secondary"}>Get Directions</Button>
                    </div>

                    <div className={"mt-4 md:mt-6"}>
                        <Body>
                            Or call us at <u><a href={"tel:+19723551807"}>+1 972-355-1807</a></u>
                        </Body>
                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Hero;