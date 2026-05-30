import { PiCoatHanger } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiDoor } from "react-icons/pi";
import { PiStar } from "react-icons/pi";

import Highlight from "./Highlight.tsx";


const highlights = [
    {icon: PiCoatHanger, text: "In House Cleaning", key: 1},
    {icon: PiClock, text: "Same Day Services", key: 2},
    {icon: PiDoor, text: "24/7 Drop Off", key: 3},
    {icon: PiStar, text: "Earn Reward Points", key: 4}
]
function Highlights() {
    return (
        <div className={"responsive-py px-2 max-w-5xl mx-auto"}>
            <div className={"grid grid-cols-2 justify-center place-items-center gap-y-10 md:gap-y-14 gap-x-2 min-[850px]:flex"}>
                {highlights.map(highlight =>
                    <Highlight Icon={highlight.icon} text={highlight.text} key={highlight.key}/>
                )}
            </div>
        </div>
    )
}

export default Highlights