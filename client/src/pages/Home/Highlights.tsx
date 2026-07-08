import { PiClock } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import dropOffBox from "../../assets/dropOffBox.png"
import vanAtFrontDoor from "../../assets/vanAtFrontDoor.png"

import Highlight from "./Highlight.tsx";


const sameDayHighlight = {icon: PiClock, text: "Same-day service", description: "Drop off qualifying items before 9:00 AM and have them ready by 3:00 PM."}
const ecoFriendlyHighlight = {icon: PiStar, text: "Eco-friendly cleaning", description: "We use modern hydrocarbon cleaning technology instead of harsh perc-based chemicals."}

const deliveryHighlight = {image: vanAtFrontDoor, text: "Convenient pickup & delivery", description: "Professional laundry and dry cleaning services without adding another errand to your week.", key: 2}
const dropOffBoxHighlight = {image: dropOffBox, text: "24/7 Secure drop-off", description: "Use our secure drop box whenever it fits your schedule.", key: 3}

function Highlights() {

    return (
        <div className={"responsive-py px-2 max-w-5xl mx-auto"}>
            <div className={"flex flex-col justify-center place-items-center gap-4"}>
                <Highlight Icon={sameDayHighlight.icon} text={sameDayHighlight.text} description={sameDayHighlight.description}/>
                <Highlight Icon={ecoFriendlyHighlight.icon} text={ecoFriendlyHighlight.text} description={ecoFriendlyHighlight.description}/>
            </div>
        </div>
    )
}

export default Highlights