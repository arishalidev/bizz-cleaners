import {IoPricetagOutline} from "react-icons/io5";
import {PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Pricing and turnaround time";
export const variant = "inline" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: IoPricetagOutline,
        text: "Pricing",
        description: "Pricing is provided on a per-garment basis after inspection."
    },
    {
        Icon: PiClock,
        text: "Turnaround time",
        description: "Most Indian garment cleaning orders are completed within 2–3 days."
    },
];
