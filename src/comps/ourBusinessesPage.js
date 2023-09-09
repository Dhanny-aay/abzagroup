import Footer from "./footer";
import Navbar from "./navbar";
import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import red from '../images/Angle-right-red.svg';
import { motion } from "framer-motion";

const OurBusinessesPage = () => {
    return ( 
        <motion.div
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.3}}
        >
        <Navbar/>
        <div className=" md:p-14 px-3  py-5 w-full h-[90vh]">
            <div className=" w-full h-[100%] bg-yellow-100 rounded-[30px] biztwo bg-cover relative">
                <span className=" absolute bottom-8 left-4 md:bottom-[64px] md:left-[64px] space-y-4">
                    <p className=" font-Mulish font-semibold text-[24px] md:text-[48px] text-[#fff]">Transformation is here</p>
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
        className="my-16 md:px-8 lg:px-16 px-3 flex flex-col justify-center items-center">
            <p className=" font-Mulish text-[24px] md:text-[32px] text-center font-semibold">Our Businesses</p>
            <p className=" font-Mulish text-[16px] font-normal md:text-lg text-center">Our diversified portfolio of businesses allows us to leverage our strengths in different sectors and mitigate risks. Our company is committed to providing high-quality products and services to our customers and we constantly expanding our operations.</p>
        </motion.div>
        <div className="md:mt-16 px-3 md:px-8 lg:px-16 space-y-16">
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 mt-6 md:mt-0 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] md:mt-3 lg:mt-0 font-semibold">Azba Real Estate Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 space-x-2"> 
                        <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 lg:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizone bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row-reverse items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 mt-6 lg:mt-0 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] lg:text-right font-semibold">Azba Farms and Foods Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal lg:text-right">Azba Group is a multi-sector conglomerate with a strong track record of providing high-quality services to its customers. The company's services are delivered by a team of experienced professionals who are committed to providing excellent customer service.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 right-0 space-x-2"> 
                    <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizertwo bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 mt-6 lg:mt-0 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] font-semibold">Azba Consulting Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 space-x-2"> 
                    <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizthree bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row-reverse items- justify-around">
                <div className=" w-full lg:w-[48%] mt-6 lg:mt-0 relative space-y-3 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] lg:text-right font-semibold">Azba Energy Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal lg:text-right">Azba Group is a multi-sector conglomerate with a strong track record of providing high-quality services to its customers. The company's services are delivered by a team of experienced professionals who are committed to providing excellent customer service.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 right-0 space-x-2"> 
                    <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizfour bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 mt-6 lg:mt-0 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] font-semibold">Azba Trading Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
                    <span className="flex flex-row lg:absolute bottom-0 space-x-2"> 
                    <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizfive bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row-reverse items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 mt-6 lg:mt-0 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] lg:text-right font-semibold">Azba Logistics</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal lg:text-right">Azba Group is a multi-sector conglomerate with a strong track record of providing high-quality services to its customers. The company's services are delivered by a team of experienced professionals who are committed to providing excellent customer service.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 right-0 space-x-2"> 
                    <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizsix bg-cover"></div>
            </motion.div>
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=" flex flex-col-reverse lg:flex-row items- justify-around">
                <div className=" w-full lg:w-[48%] relative mt-6 lg:mt-0 space-y-3 md:space-y-4">
                    <p className=" font-Mulish text-2xl md:text-[32px] font-semibold">Azba Technology Ltd</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
                    <span className=" flex flex-row lg:absolute bottom-0 space-x-2"> 
                        <p className=" font-Mulish text-[#9B090A] font-semibold text-lg md:text-[24px]">Contact for Business</p>
                        <img src={ red } className=' w-[18px] h-[18px] md:w-auto md:h-auto mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] bizseven bg-cover"></div>
            </motion.div>
        </div>
        <Footer/>
        </motion.div>
     );
}
 
export default OurBusinessesPage;