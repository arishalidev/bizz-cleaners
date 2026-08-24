import {PiLightning, PiVan, PiClock} from "react-icons/pi";
import type {TurnaroundItem} from "../../../components/TurnaroundTime.tsx";

export const headline = "Turnaround times";
export const variant = "stacked" as const;
export const items: TurnaroundItem[] = [
    {
        Icon: PiLightning,
        text: "Rush service",
        description: "Available upon request."
    },
    {
        Icon: PiClock,
        text: "Standard service",
        description: "Most household items are ready within 2 days."
    },
    {
        Icon: PiVan,
        text: "Pickup and delivery",
        description: "Items are typically returned the day after cleaning."
    },
];
