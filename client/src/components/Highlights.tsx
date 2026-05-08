import { PiCoatHanger } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { PiDoorLight } from "react-icons/pi";
import { PiVan } from "react-icons/pi";

import Highlight from "./Highlight.tsx";


const highlights = [
    {icon: PiCoatHanger, text: "In House Cleaning", key: 1},
    {icon: CiClock2, text: "Same Day Services", key: 2},
    {icon: PiDoorLight, text: "24/7 Drop Off", key: 3},
    {icon: PiVan, text: "Pickup and Delivery", key: 4}
]
function Highlights() {
    return (
        <div className={"grid grid-cols-2 justify-center place-items-center gap-y-8 mt-6"}>
            {highlights.map(highlight =>
                <Highlight Icon={highlight.icon} text={highlight.text} key={highlight.key}/>
            )}
        </div>
    )
}

export default Highlights