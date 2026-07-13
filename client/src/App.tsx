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
                      <Route path={"/About"} element={<About/>} />
                      <Route path={"/delivery"} element={<PickupAndDelivery/>} />
                      <Route path={"/contact"} element={<ContactUs hoursOfOperation={hoursOfOperation}/>} />
                  </Routes>
              </div>
            </NavbarContext.Provider>

            <Footer hoursOfOperation={hoursOfOperation}/>

      </BrowserRouter>
  );
}

export default App;