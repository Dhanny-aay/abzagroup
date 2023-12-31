import { Link } from 'react-router-dom';
import red from '../images/Angle-right-red.svg';
import { motion } from 'framer-motion';
const Services = () => {
    return ( 
        <>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className="my-16 px-3 md:px-16">
            <div className=" flex flex-col-reverse lg:flex-row items- justify-around">
                <div className="w-full lg:w-[48%] h-[325px] mt-3 lg:mt-0 md:h-[500px] rounded-[10px] servi bg-cover"></div>
                <div className=" w-full lg:w-[48%] relative">
                    <p className=" font-Mulish text-[24px] md:text-[32px] font-semibold text-left lg:text-right">Our services are top notch</p>
                    <p className=" font-Mulish text-base mt-3 md:mt-0 md:text-lg font-normal lg:text-right">Azba Group is a multi-sector conglomerate with a strong track record of providing high-quality services to its customers. The company's services are delivered by a team of experienced professionals who are committed to providing excellent customer service.</p>
                    <span className=" hidden md:flex flex-row right-0 lg:absolute bottom-0 space-x-2"> 
                        <Link to='/about'><p className=" font-Mulish text-[#9B090A] font-semibold text-[24px]">Learn more</p></Link>
                        <img src={ red } className=' mt-1' alt="" />
                    </span>
                </div>
            </div>
        </motion.div>
        </>
     );
}
 
export default Services;