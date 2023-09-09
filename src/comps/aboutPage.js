import Footer from "./footer";
import Navbar from "./navbar";
import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import { motion } from "framer-motion";

const AboutPage = () => {
    return ( 
        <motion.div
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.3}}
        >
        <Navbar/>
        <div className=" md:p-14 px-3  py-5 w-full h-[90vh]">
            <div className=" w-full h-[100%] bg-black rounded-[30px] ceoHero bg-cover relative">
                <span className=" absolute bottom-8 left-4 md:bottom-[64px] md:left-[64px] space-y-4">
                    <p className=" font-Mulish font-semibold text-[24px] md:text-[48px] text-[#fff]">A speech from our CEO</p>
                    <span className=" flex flex-row space-x-2 items-center">
                        <p className=" font-Mulish text-base md:text-2xl font-normal text-white">Find out more</p>
                        <img src={ angleright } className=' mt-1 hidden md:block' alt="" />
                        <img src={ mobright } className=' block md:hidden mt-1' alt="" />
                    </span>
                </span>
            </div>
        </div>
        <motion.div 
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className="my-8 md:px-16 px-3 flex flex-col justify-center items-start">
            <p className=" font-Mulish w-full text-[24px] md:text-[32px] text-center font-semibold">Introduction to Azba Group</p>
            <p className=" font-Mulish text-base md:text-lg font-normal text-left mt-6">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
            <p className=" font-Mulish text-base md:text-lg font-normal text-left mt-6">Our diversified portfolio of businesses allows us to leverage our strengths in different sectors and mitigate risks. Our company is committed to providing high-quality products and services to our customers and we constantly expanding our operations.</p>
            <p className=" font-Mulish text-base md:text-lg font-normal text-left mt-6">Thank you for choosing Azba group. We look forward to helping you achieve your goals.</p>
        </motion.div>
        <div className=" my-16 md:px-16 px-3 flex flex-col justify-center items-center">
            <p className=" font-Mulish text-[24px] md:text-[32px] text-center font-semibold">The Core of Our Team</p>
            <p className=" font-Mulish lg:w-[800px] text-[16px] font-normal md:text-lg text-center">Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" w-full flex mt-8 flex-col space-y-3 lg:space-y-0 lg:flex-row items-center justify-around">
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mulish text-[20px] font-normal mt-3">Kamsi Okafor</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">C.E.O</p>
                </div>
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mulish text-[20px] font-normal mt-3">Afam Obodozie</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">M.D</p>
                </div>
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mulish text-[20px] font-normal mt-3">Femi Adedipe</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">C.F.O</p>
                </div>
            </motion.div>
        </div>
        <Footer/>
        </motion.div>
     );
}
 
export default AboutPage;