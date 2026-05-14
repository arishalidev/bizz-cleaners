import Home from "./pages/Home/Home.tsx"
import About from "./pages/About/About.tsx"
import Navigation from "./components/Navigation.tsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.tsx";

function App() {
  return (
      <BrowserRouter>
          <Navigation/>
          <div className={"pt-14"}>
              <Routes>
                  <Route path={"/"} element={<Home/>} />
                  <Route path={"/About"} element={<About/>} />
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  );
}
 //
export default App;