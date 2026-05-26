import React, {createContext} from "react";

interface NavbarContextType {
    scrolledAny: boolean;
    setScrolledAny: React.Dispatch<React.SetStateAction<boolean>>;
    scrolledPast: boolean;
    setScrolledPast: React.Dispatch<React.SetStateAction<boolean>>;

}

export const NavbarContext = createContext<NavbarContextType>(
    {
        scrolledAny: false,
        setScrolledAny: () => {},
        scrolledPast: false,
        setScrolledPast: () => {},
    });