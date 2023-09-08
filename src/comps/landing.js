import About from "./about";
import Businesses from "./businesses";
import Footer from "./footer";
import Hero from "./hero";
import Intouch from "./intouch";
import Navbar from "./navbar";
import Newsroom from "./newsroom";
import Services from "./services";
import { motion } from "framer-motion";

const Landing = () => {
    return ( 
        <motion.div
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.3}}
        >
        <Navbar/>
        <Hero/>
        <About/>
        <Businesses/>
        <Services/>
        <Newsroom/>
        <Intouch/>
        <Footer/>
        </motion.div>
     );
}
 
export default Landing;