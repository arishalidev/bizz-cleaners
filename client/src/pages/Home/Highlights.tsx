import { PiClock } from "react-icons/pi";
import { PiLeaf } from "react-icons/pi";
import { PiDoor } from "react-icons/pi";
import { PiVan } from "react-icons/pi";

import dropOffBox from "../../assets/dropOffBox.jpg"
import vanAtFrontDoor from "../../assets/vanAtFrontDoor.jpg"

import Highlight from "./Highlight.tsx";


const sameDayHighlight = {icon: PiClock, text: "Same-day service", description: "Drop off qualifying items before 9:00 AM and have them ready by 3:00 PM."}
const ecoFriendlyHighlight = {icon: PiLeaf, text: "Eco-friendly cleaning", description: "We use modern hydrocarbon cleaning technology instead of harsh perc-based chemicals."}
const deliveryHighlight = {image: vanAtFrontDoor, icon: PiVan, text: "Convenient pickup & delivery", description: "Professional laundry and dry cleaning services without adding another errand to your week.", key: 2}
const dropOffBoxHighlight = {image: dropOffBox, icon: PiDoor, text: "24/7 Secure drop-off", description: "Use our secure drop box whenever it fits your schedule.", key: 3}

function Highlights() {

    return (
        <div className={"responsive-py px-4 md:px-8 lg:px-12 mx-auto"}>
            <div className={"flex flex-col justify-center place-items-center gap-6 lg:flex-row"}>
                <div className={"flex flex-col gap-6 flex-1 self-start"}>
                    <Highlight Icon={sameDayHighlight.icon} text={sameDayHighlight.text}
                              description={sameDayHighlight.description}/>

                    <Highlight Icon={dropOffBoxHighlight.icon} image={dropOffBoxHighlight.image}
                               imageAlt={"Drop off box located at the front of our store"}
                               text={dropOffBoxHighlight.text} description={dropOffBoxHighlight.description}/>
                </div>

                <div className={"flex flex-col gap-6 flex-1 self-start"}>
                    <Highlight Icon={ecoFriendlyHighlight.icon} text={ecoFriendlyHighlight.text}
                              description={ecoFriendlyHighlight.description}/>

                    <Highlight Icon={deliveryHighlight.icon} image={deliveryHighlight.image}
                               text={deliveryHighlight.text} description={deliveryHighlight.description}
                               imageAlt={"Our signature delivery van parked outside a house"}/>
                </div>
            </div>
        </div>
    )
}

export default Highlights