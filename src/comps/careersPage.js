import Footer from "./footer";
import Navbar from "./navbar";
import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import time from '../images/time.svg';
import dollar from '../images/dollar.svg';
import { motion } from "framer-motion";


const CareerPage = () => {
    return ( 
        <motion.div
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.3}}
        >
        <Navbar/>
        <div className=" md:p-14 px-3  py-5 w-full h-[90vh]">
            <div className=" w-full h-[100%] bg-yellow-100 rounded-[30px] carHero bg-cover relative">
                <span className=" absolute bottom-8 left-4 md:bottom-[64px] md:left-[64px] space-y-4">
                    <p className=" font-Mulish font-semibold text-[24px] md:text-[48px] text-[#fff]">Careers</p>
                    <span className=" flex flex-row space-x-2 items-center">
                        <p className=" font-Mulish text-base md:text-2xl font-normal text-white">Latest career opportunities</p>
                        <img src={ angleright } className=' mt-1 hidden md:block' alt="" />
                        <img src={ mobright } className=' block md:hidden mt-1' alt="" />
                    </span>
                </span>
            </div>
        </div>
        <p className=" my-6 font-Mulish w-full text-[24px] md:text-[32px] text-center font-semibold">Our Values</p>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-16 px-3 md:px-16">
            <div className=" flex flex-col lg:flex-row items- justify-around">
                <div className=" w-full lg:w-[48%] relative space-y-3 lg:space-y-0">
                    <div className="">
                        <p className=" font-Mulish text-base md:text-xl font-semibold">1. Our Coverage</p>
                        <p className=" ml-5 font-Mulish text-sm md:text-base mb-6 lg:mb-10">Our services extends all over Nigeria and beyond. We have capability to process payments in Naira, Dollars and Pounds. Whatever currency or process you thinking, we’ve got you covered.</p>
                        <p className=" font-Mulish text-base md:text-xl font-semibold">2. Our Culture</p>
                        <p className=" ml-5 font-Mulish text-sm md:text-base mb-6 lg:mb-10">At Azba group, we make work fun, employing only the best hands who enjoy what they do beyond earning a pay. This is reflected in our superb customer service. </p>
                        <p className=" font-Mulish text-base md:text-xl font-semibold">3. AP operations</p>
                        <p className=" ml-5 font-Mulish text-sm md:text-base mb-6 lg:mb-10" >We operate using the best and internationally recognized SOPs. This is particulalry obvious in our various certifcations by ISO, CBN, NDPB.</p>
                        <p className=" font-Mulish text-base md:text-xl font-semibold">4. Future of payments</p>
                        <p className=" ml-5 font-Mulish text-sm md:text-base">We are constantly seeking new breakthroughs and solutions to cater to problems business haven’t reported and ensuuring we make our newer products far easier and efficient than the last.</p>
                    </div>
                </div>
                <div className=" w-full mt-4 lg:mt-0 lg:w-[48%] h-[325px] md:h-[500px] rounded-[10px] mobAbout md:succ bg-cover"></div>
            </div>
        </motion.div>
        <div className=" my-8 md:px-16 px-3 flex flex-col justify-center items-center">
            <p className=" font-Mulish text-[24px] md:text-[32px] text-center font-semibold">Vacancies</p>
            <p className=" font-Mulish lg:w-[700px] text-[16px] font-normal md:text-lg text-center">Want to work with some of the best global talent and build software used by all the companies you know and love? Join the team — we’re hiring!</p>
        </div>

        <motion.div 
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" my-8 px-3 md:px-16">
            {/* //Design */}
            <div className="border-y py-10">
                <div className=" flex flex-col lg:flex-row items- justify-around">
                    <div className=" w-full lg:w-[38%] relative space-y-3 lg:space-y-0">
                        <p className=" font-Mulish text-base md:text-xl text-[#101828] font-semibold">Design</p>
                        <p className=" font-Mulish text-sm md:text-base " >Open positions in our design team.</p>
                    </div>
                    <div className=" w-full mt-4 lg:mt-0 lg:w-[58%] space-y-5">
                        <div className=" border border-[#EAECF0] rounded-[16px] bg-transparent w-full p-6 space-y-5">
                            <p className=" font-Mulish font-medium text-base md:text-lg">Product Designer</p>
                            <p className=" text-sm md:text-base text-black text-opacity-80 font-normal font-Mulish">We’re looking for a mid-level product designer to join our team.</p>
                            <div className=" flex flex-row space-x-4 w-full">
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ time } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">Full-time</p>
                                </span>
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ dollar } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">80k - 100k</p>
                                </span>
                            </div>
                        </div>

                        <div className=" border border-[#EAECF0] rounded-[16px] bg-transparent w-full p-6 space-y-5">
                            <p className=" font-Mulish font-medium text-base md:text-lg">Product Designer</p>
                            <p className=" text-sm md:text-base text-black text-opacity-80 font-normal font-Mulish">We’re looking for a mid-level product designer to join our team.</p>
                            <div className=" flex flex-row space-x-4 w-full">
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ time } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">Full-time</p>
                                </span>
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ dollar } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">80k - 100k</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //software */}
            <div className="py-10">
                <div className=" flex flex-col lg:flex-row items- justify-around">
                    <div className=" w-full lg:w-[38%] relative space-y-3 lg:space-y-0">
                        <p className=" font-Mulish text-base md:text-xl text-[#101828] font-semibold">Software Development</p>
                        <p className=" font-Mulish text-sm md:text-base " >Open positions in our software team.</p>
                    </div>
                    <div className=" w-full mt-4 lg:mt-0 lg:w-[58%] space-y-5">
                        <div className=" border border-[#EAECF0] rounded-[16px] bg-transparent w-full p-6 space-y-5">
                            <p className=" font-Mulish font-medium text-base md:text-lg">Engineering Manager</p>
                            <p className=" text-sm md:text-base text-black text-opacity-80 font-normal font-Mulish">We’re looking for an experienced engineering manager to join our team..</p>
                            <div className=" flex flex-row space-x-4 w-full">
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ time } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">Full-time</p>
                                </span>
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ dollar } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">80k - 100k</p>
                                </span>
                            </div>
                        </div>

                        <div className=" border border-[#EAECF0] rounded-[16px] bg-transparent w-full p-6 space-y-5">
                            <p className=" font-Mulish font-medium text-base md:text-lg">Frontend Developer</p>
                            <p className=" text-sm md:text-base text-black text-opacity-80 font-normal font-Mulish">We’re looking for an experienced frontend developer to join our team.</p>
                            <div className=" flex flex-row space-x-4 w-full">
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ time } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">Full-time</p>
                                </span>
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ dollar } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">80k - 100k</p>
                                </span>
                            </div>
                        </div>
                        
                        <div className=" border border-[#EAECF0] rounded-[16px] bg-transparent w-full p-6 space-y-5">
                            <p className=" font-Mulish font-medium text-base md:text-lg">Backend Developer</p>
                            <p className=" text-sm md:text-base text-black text-opacity-80 font-normal font-Mulish">We’re looking for an experienced backend developer to join our team.</p>
                            <div className=" flex flex-row space-x-4 w-full">
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ time } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">Full-time</p>
                                </span>
                                <span className=" flex flex-row space-x-2 w-full">
                                    <img src={ dollar } className="" alt="" />
                                    <p className=" font-Mulish text-[#00000099] md:text-base text-sm font-medium">80k - 100k</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <Footer/>
        </motion.div>
     );
}
 
export default CareerPage;