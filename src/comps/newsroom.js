import { motion } from 'framer-motion';
const Newsroom = () => {
    return ( 
        <>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" my-16 md:px-16 px-3 flex flex-col justify-center items-center">
            <p className=" font-Mulish text-[24px] md:text-[32px] text-center font-semibold">Newsroom</p>
            <p className=" font-Mulish text-[16px] font-normal md:text-lg text-center">Latest News and Insights from Azba Group</p>
            <div className=" w-full flex mt-8 flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-around">
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mul6ish text-[20px] md:text-[24px] font-normal mt-3">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">26 July 2021</p>
                </div>
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mulish text-[20px] md:text-[24px] font-normal mt-3">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">26 July 2021</p>
                </div>
                <div className=" flex flex-col w-full md:w-[350px]">
                    <span className=" w-full rounded-[10px] h-[300px] bg-[#06191F]">

                    </span>
                    <p className=" font-Mulish text-[20px] md:text-[24px] font-normal mt-3">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                    <p className=" text-[#000000CC] font-Mulish font-normal mt-1 text-[14px] md:text-base">26 July 2021</p>
                </div>
            </div>
            <p className=" font-Mulish text-[16px] md:text-2xl text-[#9B090A] font-semibold mt-16">View More</p>
        </motion.div>
        </>
     );
}
 
export default Newsroom;