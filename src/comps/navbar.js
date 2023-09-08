import logo from '../images/logo.svg';
import angledown from '../images/angledown.svg';
import menu from '../images/menu.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };

    return ( 
        <>
        <motion.div
        
        id="overlay" className=" w-full p-5 py-2 h-[350px] flex justify-center items-center -translate-y-[500px] transition-all duration-500 fixed z-[40]">
            <div className=' bg-[#ffffffd3] w-full h-full flex justify-center mt-5  backdrop-blur-sm items-center py-10 rounded-lg relative'>
                <img src={ menu } onClick={ overlay } className=' absolute top-6 right-6' alt="" />
                <div className=" flex flex-col justify-center items-center space-y-5">
                    <p className=" font-Mulish text-sm text-black font-medium">About Us</p>
                    <p className=" font-Mulish text-sm text-black font-medium">Our Buisnesses</p>
                    <p className=" font-Mulish text-sm text-black font-medium">Newsroom</p>
                    <p className=" font-Mulish text-sm text-black font-medium">Contact</p>
                    <p className=" font-Mulish text-sm text-black font-medium">Contact</p>
                </div>
            </div>
        </motion.div>

        <div className=" w-full px-5 md:px-8 lg:px-24 py-5 flex flex-row justify-between items-center border-b border-[#D6D6D6]">
            <img src={ logo } alt="" />
            <span className=" hidden md:flex flex-row items-center space-x-16">
                <p className=' font-Mulish text-base font-semibold text-[#06191F]'>About us</p>
                <span className=' flex flex-row items-center space-x-2'>
                    <p className=' font-Mulish text-base font-semibold text-[#06191F]'>Our businesses</p>
                    <img src={ angledown } className=' mt-1' alt="" />
                </span>
                <p className=' font-Mulish text-base font-semibold text-[#06191F]'>Newsroom</p>
                <p className=' font-Mulish text-base font-semibold text-[#06191F]'>Careers</p>
                <p className=' font-Mulish text-base font-semibold text-[#06191F]'>Contact</p>
            </span>
            <img src={ menu }  onClick={ overlay } className='block md:hidden' alt="" />
        </div>
        </>
     );
}
 
export default Navbar; 