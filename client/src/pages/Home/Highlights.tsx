import { PiCoatHanger } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiDoor } from "react-icons/pi";
import { PiStar } from "react-icons/pi";

import Highlight from "./Highlight.tsx";
import {useState} from "react";


const highlights = [
    {icon: PiClock, text: "Same Day Services", key: 1},
    {icon: PiDoor, text: "24/7 Drop Off", longText: "Drop off clothes anytime with our drop off box. Simply put your labeled bag in the box, and we will clean it at our earliest convince ..", key: 2},
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
                <div className={"w-md md:w-xl min-[850px]:w-2xl mx-auto h-fit mt-12 bg-primary-50 rounded-md shadow-md"}>
                    <div className={"px-8 py-4 flex gap-18 min-[850px]:gap-36"}>
                        {modalNum &&
                        <div className={"flex flex-col gap-2"}>
                            <div
                                className={"text-3xl md:text-4xl flex justify-center items-center size-15 md:size-18 rounded-full bg-primary-100"}>
                                <modalNum.icon></modalNum.icon>
                            </div>
                            <div className={"font-semibold "}>{modalNum.text}</div>
                            <div className={"mt-2"}>{modalNum.longText}</div>
                        </div>

                    }
                        <div className={"ml-auto"}>
                            <button className={"bg-primary-200 p-2 rounded-md"} onClick={() => setModal(undefined)}>close</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Highlights