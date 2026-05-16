import Home from "./pages/Home/Home.tsx"
import About from "./pages/About/About.tsx"
import Navigation from "./components/Navigation.tsx"

import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
//import Footer from "./components/Footer.tsx";
import PickupAndDelivery from "./pages/PickupAndDelivery/PickupAndDelivery.tsx";
import {useEffect} from "react";


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
    return (
      <BrowserRouter>
          <ScrollToTop/>
          <div className={"bg-neutral-50"}>
              <Navigation/>
              <div className={"pt-17"}>
                  <Routes>
                      <Route path={"/"} element={<Home/>} />
                      <Route path={"/About"} element={<About/>} />
                      <Route path={"/delivery"} element={<PickupAndDelivery/>} />
                  </Routes>
              </div>
              {/*<Footer/>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;