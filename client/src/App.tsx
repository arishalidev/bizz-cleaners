import Home from "./pages/Home/Home.tsx"
import About from "./pages/About/About.tsx"
import Navigation from "./components/Navigation.tsx"

import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Footer from "./components/Footer.tsx";
import PickupAndDelivery from "./pages/PickupAndDelivery/PickupAndDelivery.tsx";
import {useEffect, useState} from "react";
import ContactUs from "./pages/ContactUs.tsx";
import {apiBase} from "./utils/links.ts";

import { NavbarContext } from "./contexts/NavbarContext.tsx"
import DryCleaning from "./pages/Services/DryCleaning/DryCleaning.tsx";
import WashAndFold from "./pages/Services/WashAndFold/WashAndFold.tsx";
import Leather from "./pages/Services/Leather/Leather.tsx";
import Wedding from "./pages/Services/Wedding/Wedding.tsx";
import Household from "./pages/Services/Household/Household.tsx";
import Shoes from "./pages/Services/Shoes/Shoes.tsx";
import LaundryShirts from "./pages/Services/LaundryShirts/LaundryShirts.tsx";
import IndianGarments from "./pages/Services/IndianGarments/IndianGarments.tsx";
import Services from "./pages/Services/Services/Services.tsx";

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

function App() {

    // User has scrolled at all
    const [scrolledAny, setScrolledAny] = useState(false);

    // User has scrolled all the way past the hero
    const [scrolledPast, setScrolledPast] = useState(false);

    // User has scrolled all the way past the hero on lg screens
    const [scrolledPastLg, setScrolledPastLg] = useState(false);

    const [hoursOfOperation, setHoursOfOperation] = useState<string[]>([]);

    useEffect(() => {
        fetch(`${apiBase}/api/get/business-information`)
            .then(res => res.json())
            .then(data => {
                setHoursOfOperation(data.hoursOfOperation);
            })
    }, []);
    return (
      <BrowserRouter>
          <ScrollToTop/>
            <NavbarContext.Provider value={{scrolledAny, setScrolledAny, scrolledPast, setScrolledPast, setScrolledPastLg, scrolledPastLg}}>

                <Navigation/>
              <div>
                  <Routes>
                      <Route path={"/"} element={<Home/>} />
                      <Route path={"/about"} element={<About/>} />
                      <Route path={"/services"} element={<Services/>} />
                      <Route path={"/delivery"} element={<PickupAndDelivery/>} />
                      <Route path={"/contact"} element={<ContactUs hoursOfOperation={hoursOfOperation}/>} />
                      <Route path={"/dry-cleaning"} element={<DryCleaning/>} />
                      <Route path={"/wash-and-fold"} element={<WashAndFold/>} />
                      <Route path={"/leather"} element={<Leather/>} />
                      <Route path={"/wedding"} element={<Wedding/>} />
                      <Route path={"/household"} element={<Household/>} />
                      <Route path={"/shoes"} element={<Shoes/>} />
                      <Route path={"/laundry-shirts"} element={<LaundryShirts/>} />
                      <Route path={"/indian-garments"} element={<IndianGarments/>} />

                  </Routes>
              </div>
            </NavbarContext.Provider>

            <Footer/>

      </BrowserRouter>
  );
}

export default App;