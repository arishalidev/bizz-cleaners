import {IoPricetagOutline} from "react-icons/io5";
import {PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Pricing and turnaround time";
export const variant = "inline" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: IoPricetagOutline,
        text: "Pricing",
        description: "Every wedding dress is unique, so pricing is provided after we inspect the gown Factors such as fabric type, embellishments, staining, and overall condition all affect the final cost."
    },
    {
        Icon: PiClock,
        text: "Turnaround time",
        description: "Most wedding dress cleaning and preservation orders are completed within 2–3 weeks."
    },
];
