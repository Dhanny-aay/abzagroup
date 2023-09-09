import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Businesses = () => {
    return ( 
        <>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-20 px-3 md:px-16">
            <div className=" w-full flex flex-col lg:flex-row justify-around">
                <div className=" lg:w-[60%] space-y-3 md:space-y-0">
                    <p className=" font-Mulish text-2xl md:text-[32px] font-semibold">Our Businesses</p>
                    <p className=" font-Mulish text-lg font-normal">Our diversified portfolio of businesses allows us to leverage our strengths in different sectors and mitigate risks. Our company is committed to providing high-quality products and services to our customers and we constantly expanding our operations.</p>
                </div>
                <div className="w-full lg:w-[350px]">
                    <div className=" w-full h-[350px] mt-4 md:mt-0 md:h-[380px] rounded-[20px] bizone bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Real Estate Ltd</p>
                </div>
            </div>
        </motion.div>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-4 md:mt-14 px-3 md:px-16">
            <div className=" flex flex-col lg:flex-row items-center justify-around space-y-4 md:space-y-8 lg:space-y-0">
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] biztwo bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Farms and Foods Ltd</p></Link>
                </div>
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] bizthree bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Consulting Ltd</p></Link>
                </div>
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] bizfour bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Energy Ltd</p></Link>
                </div>
            </div>

        </motion.div>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-4 md:mt-14 px-3 md:px-16">
            <div className=" flex flex-col lg:flex-row justify-around space-y-4 md:space-y-8 lg:space-y-0">
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] bizfive bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Trading Ltd</p></Link>
                </div>
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] bizsix bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Logistics</p></Link>
                </div>
                <div className=" w-full lg:w-[350px]">
                    <div className=" w-full h-[380px] bg-[#06191F] rounded-[20px] bizseven bg-cover"></div>
                    <Link to='/businesses'><p className=" font-Mulish text-xl font-normal mt-3">Azba Technology Ltd</p></Link>
                </div>
            </div>

        </motion.div>
        </>
     );
}
 
export default Businesses;