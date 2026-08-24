import {createContext} from "react";

interface BusinessInfoContextType {
    hoursOfOperation: string[];
    isOpen: boolean | undefined;
    rating: number | null;
    userRatingCount: number | null;
}

export const BusinessInfoContext = createContext<BusinessInfoContextType>({
    hoursOfOperation: [],
    isOpen: undefined,
    rating: null,
    userRatingCount: null,
});
