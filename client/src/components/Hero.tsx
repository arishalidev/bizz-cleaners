import '../App.css';
import heroImage from '../assets/hero-image.png';

function Hero() {
    return (
        <div className={"relative"}>
            <img src={heroImage} alt={"Clean pressed shirts"} className={"max-w-full h-auto"}/>
            <div className={"absolute inset-0 bg-[hsla(0,0%,0%,.7)]"}></div>

            <div className={"m-4"}>
                <div className={"absolute top-24 text-white space-y-2"}>
                    <h1 className={"text-4xl font-semibold"}>Flower Mound’s<br/> Trusted Dry Cleaners</h1>
                    <h2 className={"text-2xl font-medium"}>Same Day Services <br/> Free Pickup and Delivery</h2>

                    <div className={"flex space-x-4"}>
                        <button className={"mt-12"}>Schedule Pickup</button>
                        <button className={"mt-12"}>Get Directions</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Hero;