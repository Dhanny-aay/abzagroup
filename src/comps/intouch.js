import call from '../images/call.svg';
import loca from '../images/loca.svg';
import mail from '../images/mail.svg';

const Intouch = () => {
    return ( 
        <>
        <div className=" w-full my-16 px-3 md:px-16">
            <div className=" w-full pb-[45px] border-b flex flex-col justify-center items-center">
                <p className=" text-[24px] text-center md:text-[32px] font-Mulish font-semibold">Get in touch</p>
                <p className=" font-Mulish text-center text-base md:text-lg font-normal mt-2">Our friendly team is always here to chat.</p>
            </div>
            <div className=' flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-start md:items-start lg:items-start justify-around mt-8'>
                <span className=' flex flex-col items-start'>
                    <img src={ mail } className='' alt="" />
                    <p className=' font-Mulish font-semibold text-lg md:text-xl mt-['>Email</p>
                    <p className=' font-Mulish font-normal text-base'>Our friendly team is here to help.</p>
                    <p className=' font-Mulish font-bold text-base mt-3'>info@azbagroup.com</p>
                </span>
                <span className=' flex flex-col items-start'>
                    <img src={ loca } className='' alt="" />
                    <p className=' font-Mulish font-semibold text-lg md:text-xl mt-[12px]'>Office</p>
                    <p className=' font-Mulish font-normal text-base'>Come say hello at our office HQ.</p>
                    <p className=' font-Mulish font-bold text-base mt-3'>30 Raymond Njoku Street, Ikoyi, Lagos</p>
                </span>
                <span className=' flex flex-col items-start'>
                    <img src={ call } className='' alt="" />
                    <p className=' font-Mulish font-semibold text-lg md:text-xl mt-[12px]'>Phone</p>
                    <p className=' font-Mulish font-normal text-base'>Mon-Fri from 8am to 5pm.</p>
                    <p className=' font-Mulish font-bold text-base mt-3'>+234 123 4567 890</p>
                </span>
            </div>
        </div>
        </>
     );
}
 
export default Intouch;