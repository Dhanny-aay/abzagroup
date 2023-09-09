import biright from '../images/biright.svg';
import twi from '../images/twi.svg';
import ig from '../images/ig.svg';
import lnkd from '../images/lnkd.svg';
import fb from '../images/fb.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <div className="mt-16 lg:px-16 md:px-8 px-3 py-6 w-full md:py-16 bg-[#9B090A] text-white">
            <div className=" w-full">
                <div className=" flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-around">
                    <div className=" flex flex-col ">
                        <span className=' space-y-3'>
                        <p className=" text-white font-Mulish text-[18px] md:text-[20px] mb-2 font-semibold">Company</p>
                        <Link to='/'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">Home</p></Link>
                        <Link to='/about'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">About us</p></Link>
                        <Link to='/businesses'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">Our businesses</p></Link>
                        <Link to='/newsroom'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">Newsroom</p></Link>
                        <Link to='/careers'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">Career</p></Link>
                        <Link to='/contactus'><p className=" font-Mulish text-sm font-normal mb-2 text-[#FFFFFFCC]">Contact</p></Link>
                        </span>
                        <div className='hidden lg:block mt-[90px]'>
                            <p className=' font-Mulish text-xl font-semibold'>Follow AZBA group</p>
                            <span className=' flex flex-row mt-3 space-x-3'>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ twi } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ ig } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ lnkd } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ fb } alt="" />
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-3">
                        <button  className=' flex items-center justify-center mr-auto'>
                        <p className=" text-white font-Mulish text-[18px] md:text-[20px] font-semibold">Our businesses</p>
                        <img src={ biright } className=' md:mt-1 ml-3' alt="" />
                        </button>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Real Estate Ltd</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Farms and Foods Ltd</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Consulting Ltd</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Energy Ltd</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Trading Ltd</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Logistics</p>
                        <p className=" font-Mulish text-sm font-normal text-[#FFFFFFCC]">Azba Technology Ltd</p>
                    </div>
                    <div className=" flex flex-col space-y-3">
                        <button  className=' flex items-center justify-center mr-auto'>
                        <p className=" text-white font-Mulish text-[18px] md:text-[20px] font-semibold">Latest news</p>
                        <img src={ biright } className=' md:mt-1 ml-3' alt="" />
                        </button>
                        <span>
                            <p className=" font-Mulish text-base font-normal md:w-[350px] leading-8 text-[#FFFFFFCC]">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                            <p className=" font-Mulish text-sm font-normal text-[#FFFFFF80]">26 July 2021</p>
                        </span>
                        <span>
                        <p className=" font-Mulish text-base font-normal md:w-[350px] leading-8 text-[#FFFFFFCC]">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                            <p className=" font-Mulish text-sm font-normal text-[#FFFFFF80]">26 July 2021</p>
                        </span>
                        <span>
                        <p className=" font-Mulish text-base font-normal md:w-[350px] leading-8 text-[#FFFFFFCC]">Murdered Retired FMC Nurse’s Gateman Flees, Colleagues Protest</p>
                            <p className=" font-Mulish text-sm font-normal text-[#FFFFFF80]">26 July 2021</p>
                        </span>
                    </div>
                    <div className='block lg:hidden '>
                            <p className=' font-Mulish text-xl font-semibold'>Follow AZBA group</p>
                            <span className=' flex flex-row mt-3 space-x-3'>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ twi } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ ig } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ lnkd } alt="" />
                                </button>
                                <button className=' w-[60px] flex justify-center items-center h-[60px] rounded-[50%] border-[3px] border-[#f0f9fc3f]'>
                                    <img src={ fb } alt="" />
                                </button>
                            </span>
                        </div>
                </div>
            </div>
        </div>
        <div className=' w-full my-4 md:my-8 px-3 md:px-20'>
            <div className=' flex flex-row justify-center items-center'>
                <p className=' font-Mulish text-base'>© 2023 AZBA group. All rights reserved.</p>
            </div>
        </div>
        </>
     );
}
 
export default Footer;