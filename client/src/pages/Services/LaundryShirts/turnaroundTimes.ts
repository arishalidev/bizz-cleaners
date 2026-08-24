import {PiLightning, PiVan, PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Turnaround times";
export const variant = "stacked" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: PiLightning,
        text: "Same-day service",
        description: "Drop off before 9:00 AM and your shirts will be ready by 3:00 PM."
    },
    {
        Icon: PiClock,
        text: "Standard service",
        description: "Most shirt orders are ready the next business day."
    },
    {
        Icon: PiVan,
        text: "Pickup and delivery",
        description: "Shirts are typically returned the day after cleaning."
    },
];
