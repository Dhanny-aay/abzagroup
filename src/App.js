import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AboutPage from "./comps/aboutPage";
import CareerPage from "./comps/careersPage";
import IntouchPage from "./comps/intouchPage";
import Landing from "./comps/landing";
import NewsRoomPage from "./comps/newsroomPage";
import OurBusinessesPage from "./comps/ourBusinessesPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={ <Landing/> }/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contactus" element={<IntouchPage />} />
        <Route path="/businesses" element={<OurBusinessesPage />} />
        <Route path="/newsroom" element={<NewsRoomPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
