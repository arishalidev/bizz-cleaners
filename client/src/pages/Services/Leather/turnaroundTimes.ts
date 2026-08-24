import {IoPricetagOutline} from "react-icons/io5";
import {PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Pricing and turnaround time";
export const variant = "inline" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: IoPricetagOutline,
        text: "Pricing",
        description: "Leather cleaning is priced by the garment, so we'll need to see the item before providing a quote"
    },
    {
        Icon: PiClock,
        text: "Turnaround time",
        description: "Most leather cleaning orders are completed within one week."
    },
];
