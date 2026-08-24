import {IoPricetagOutline} from "react-icons/io5";
import {PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Pricing and turnaround time";
export const variant = "inline" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: IoPricetagOutline,
        text: "Pricing",
        description: "Shoe cleaning and repairs is priced by the pair, so we'll need to see them before providing a quote"
    },
    {
        Icon: PiClock,
        text: "Turnaround time",
        description: "Most shoe cleaning and repair orders are completed within 2–3 days. For specific repairs or specialty items, turnaround times may vary."
    },
];
