import {PiLightning, PiVan, PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Turnaround times";
export const variant = "stacked" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: PiLightning,
        text: "Same-day service",
        description: "Drop off qualifying items before 9:00 AM and have them ready by 3:00 PM."
    },
    {
        Icon: PiClock,
        text: "Standard service",
        description: "Most dry cleaning orders are ready the next business day."
    },
    {
        Icon: PiVan,
        text: "Pickup and delivery",
        description: "Items are typically returned the day after they're cleaned."
    },
];
