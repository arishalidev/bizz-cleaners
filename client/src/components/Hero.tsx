import '../App.css';
import heroImage from '../assets/hero-image.jpg';
import Button from "./Button.tsx";

function test() {
    console.log("hi");
}

function Hero() {
    return (
        <div className={"relative overflow-hidden"}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"w-full object-cover min-h-[420px]"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"m-4"}>
                <div className={"absolute top-24 text-white space-y-2"}>
                    <h1 className={"text-3xl font-semibold"}>Flower Mound’s<br/> Trusted Dry Cleaners</h1>
                    <h2 className={"text-xl font-medium"}>Same Day Services <br/> Free Pickup and Delivery</h2>

                    <div className={"mt-12 flex space-x-4"}>
                        <Button onClick={test} variant={"primary"}>Schedule Pickup</Button>
                        <Button onClick={test} variant={"secondary"}>Get Directions</Button>
                    </div>

                    <div className={"mt-4"}>
                        <span>
                            Or call us at <u><a href={"tel:+19723551807"}>+1 972-355-1807</a></u>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Hero;