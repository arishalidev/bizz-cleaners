import { PiCoatHanger } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiDoor } from "react-icons/pi";
import { PiStar } from "react-icons/pi";

import Highlight from "./Highlight.tsx";
import {useState} from "react";


const highlights = [
    {icon: PiClock, text: "Same Day Services", key: 1},
    {icon: PiDoor, text: "24/7 Drop Off", key: 2},
    {icon: PiStar, text: "Earn Reward Points", key: 3},
    {icon: PiCoatHanger, text: "In House Cleaning", key: 4},
]
function Highlights() {

    const [modal, setModal] = useState<number | undefined>(undefined)

    const modalNum = highlights.find(highlight => highlight.key === modal)

    return (
        <div className={"responsive-py px-2 max-w-5xl mx-auto"}>
            <div className={"grid grid-cols-2 justify-center place-items-center gap-y-10 md:gap-y-14 gap-x-2 min-[850px]:flex"}>
                {highlights.map(highlight =>
                    <Highlight Icon={highlight.icon} text={highlight.text} key={highlight.key} highlightId={highlight.key} setModal={setModal}/>
                )}
            </div>

            {modal &&
                <div className={"w-4/5 md:w-3/4 min-[850px]:w-5/6 mx-auto h-48 mt-12 bg-primary-50 rounded-md shadow-md"}>
                    {modalNum &&
                        <div>
                            <modalNum.icon></modalNum.icon>
                            {modalNum.text}
                        </div>

                    }
                    <button className={"ml-auto"} onClick={() => setModal(undefined)}>close</button>
                </div>
            }
        </div>
    )
}

export default Highlights