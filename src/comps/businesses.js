import { motion } from 'framer-motion';
const Businesses = () => {
    return ( 
        <>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-20 px-3 md:px-16">
            <div className=" w-full flex flex-col md:flex-row justify-around">
                <div className=" md:w-[60%] space-y-3 md:space-y-0">
                    <p className=" font-Mulish text-[32px] font-semibold">Our Businesses</p>
                    <p className=" font-Mulish text-lg font-normal">Our diversified portfolio of businesses allows us to leverage our strengths in different sectors and mitigate risks. Our company is committed to providing high-quality products and services to our customers and we constantly expanding our operations.</p>
                </div>
                <div className="w-full md:w-[350px]">
                    <div className=" w-full h-[350px] mt-4 md:mt-0 md:h-[380px] bg- rounded-[20px] bizone bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Real Estate Ltd</p>
                </div>
            </div>
        </motion.div>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-4 md:mt-14 px-3 md:px-16">
            <div className=" flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] biztwo bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Farms and Foods Ltd</p>
                </div>
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] bizthree bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Consulting Ltd</p>
                </div>
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] bizfour bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Energy Ltd</p>
                </div>
            </div>

        </motion.div>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=" mt-4 md:mt-14 px-3 md:px-16">
            <div className=" flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] bizfive bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Trading Ltd</p>
                </div>
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] bizsix bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Logistics</p>
                </div>
                <div className=" w-full md:w-[350px]">
                    <div className=" w-full h-[380px] bg-yellow-100 rounded-[20px] bizseven bg-cover"></div>
                    <p className=" font-Mulish text-xl font-normal mt-3">Azba Technology Ltd</p>
                </div>
            </div>

        </motion.div>
        </>
     );
}
 
export default Businesses;