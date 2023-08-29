import red from '../images/Angle-right-red.svg';

const About = () => {
    return ( 
        <>
        <div className=" mt-16 px-3 md:px-16">
            <div className=" flex flex-col md:flex-row items- justify-around">
                <div className=" w-full md:w-[48%] relative space-y-3 md:space-y-0">
                    <p className=" font-Mulish text-2xl md:text-[32px] font-semibold">Your Partner for Success</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal">Azba Group is a multi-sector conglomerate with interests in real estate, trading, farming, food manufacturing and processing, consulting and contracting, and various other businesses. The company was founded in 2001 and is headquartered in Lagos, Nigeria. Azba Group has a strong track record of success and has grown to become one of the leading conglomerates in Nigeria. The company is committed to providing high-quality products and services to its customers and is constantly expanding its operations.</p>
                    <span className=" hidden md:flex flex-row absolute bottom-0 space-x-2"> 
                        <p className=" font-Mulish text-[#9B090A] font-semibold text-[24px]">Learn more</p>
                        <img src={ red } className=' mt-1' alt="" />
                    </span>
                </div>
                <div className=" w-full mt-4 md:mt-0 md:w-[48%] h-[325px] md:h-[500px] rounded-[10px] mobAbout md:succ bg-cover"></div>
            </div>
        </div>
        </>
     );
}
 
export default About;