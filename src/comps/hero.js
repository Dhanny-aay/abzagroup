import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import swipe from '../images/swipe.svg';
 
const Hero = () => {
    return ( 
        <>
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
                <span className=' absolute bottom-5 w-full hidden md:flex justify-center items-center'>
                    <img src={ swipe } className='' alt="" />
                </span>
            </div>
        </div>
        </>
     );
}
 
export default Hero;