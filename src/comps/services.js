import red from '../images/Angle-right-red.svg';
const Services = () => {
    return ( 
        <>
        <div className="my-16 px-3 md:px-16">
            <div className=" flex flex-col-reverse md:flex-row items- justify-around">
                <div className="w-full md:w-[48%] h-[325px] mt-3 md:mt-0 md:h-[500px] rounded-[10px] servi bg-cover"></div>
                <div className=" w-full md:w-[48%] relative">
                    <p className=" font-Mulish text-[24px] md:text-[32px] font-bold text-left md:text-right">Our services are top notch</p>
                    <p className=" font-Mulish text-base md:text-lg font-normal md:text-right">Azba Group is a multi-sector conglomerate with a strong track record of providing high-quality services to its customers. The company's services are delivered by a team of experienced professionals who are committed to providing excellent customer service.</p>
                    <span className=" hidden md:flex flex-row right-0 absolute bottom-0 space-x-2"> 
                        <p className=" font-Mulish text-[#9B090A] font-semibold text-[24px]">Learn more</p>
                        <img src={ red } className=' mt-1' alt="" />
                    </span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;