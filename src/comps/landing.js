import About from "./about";
import Businesses from "./businesses";
import Footer from "./footer";
import Hero from "./hero";
import Intouch from "./intouch";
import Navbar from "./navbar";
import Newsroom from "./newsroom";
import Services from "./services";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Businesses/>
        <Services/>
        <Newsroom/>
        <Intouch/>
        <Footer/>
        </>
     );
}
 
export default Landing;