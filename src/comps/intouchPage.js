import Footer from "./footer";
import Navbar from "./navbar";
import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import Intouch from "./intouch";
import { motion } from "framer-motion";


const IntouchPage = () => {
    return ( 
        <motion.div
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.3}}
        >
        <Navbar/>
        <div className=" md:p-14 px-3  py-5 w-full h-[90vh]">
            <div className=" w-full h-[100%] bg-black rounded-[30px] conHero bg-cover relative">
                <span className=" absolute bottom-8 left-4 md:bottom-[64px] md:left-[64px] space-y-4">
                    <p className=" font-Mulish font-semibold text-[24px] md:text-[48px] text-[#fff]">Contact Us</p>
                    <span className=" flex flex-row space-x-2 items-center">
                        <p className=" font-Mulish text-base md:text-2xl font-normal text-white">Find out more</p>
                        <img src={ angleright } className=' mt-1 hidden md:block' alt="" />
                        <img src={ mobright } className=' block md:hidden mt-1' alt="" />
                    </span>
                </span>
            </div>
        </div>   

        <div className="mt-12 md:px-8 lg:px-16 px-3 ">
            <p className=" font-Mulish w-full text-[24px] md:text-[32px] text-center font-semibold">Introduction to Azba Group</p>
            <p className=" font-Mulish w-full text-[16px] md:text-[18px] text-center font-normal">We’d love to hear from you. Please fill out this form.</p>
        </div>

        <div className=" my-8 w-full md:px-10 lg:px-20">
            <div className=" w-full p-3 md:p-8 md:border rounded-[8px] border-[#DAE0E6]">
                <div className=" w-full flex flex-col md:flex-row justify-between mb-6">
                    <span className=" w-full md:w-[48%]">
                        <label className=" font-Mulish text-base font-medium" for="first-name">First name</label>
                        <input type="text" id="first-name" placeholder="John Doe" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-gray-900 font-Mulish font-normal placeholder:font-Mulish text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    </span>
                    <span className=" w-full md:w-[48%]">
                        <label className=" font-Mulish text-base font-medium" for="first-name">Email Address</label>
                        <input type="text" id="mail" placeholder="Johndoe@mail.com" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-gray-900 font-Mulish font-normal placeholder:font-Mulish text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    </span>
                </div>
                <label className=" font-Mulish text-base font-medium" for="first-name">Phone Number</label>
                <input type="text" id="phone" placeholder="+234" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] mb-6 text-gray-900 font-Mulish font-normal placeholder:font-Mulish text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>

                <label className=" font-Mulish text-base font-medium" for="Message">Message</label>
                <textarea id="message" rows={6} placeholder="Hi! We are Azba group..." class="border-[#DAE0E6] border mb-4 bg-transparent font-Mulish font-normal placeholder:font-Mulish text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>

                <label className="flex items-center">
                    <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-base font-Mulish font-medium">
                    I agree with Azba group Privacy Policy
                    </span>
                </label>

                <button className=" w-full flex h-[45px] mt-6 rounded-[8px] bg-[#9B090A] hover:bg-opacity-75 transition-all justify-center items-center">
                    <p className=" font-Mulish text-base text-white">Send Message</p>
                </button>
            </div>
        </div>
        <Intouch/>
        <Footer/>
        </motion.div>
     );
}
 
export default IntouchPage;