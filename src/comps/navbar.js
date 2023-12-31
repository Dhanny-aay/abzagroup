import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
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
        
        id="overlay" className=" w-full p-5 py-2 md:px-8 h-[370px] flex justify-center items-center -translate-y-[500px] transition-all duration-500 fixed z-[40]">
            <div className=' bg-[#ffffffd3] w-full h-full flex justify-center mt-5  backdrop-blur-sm items-center py-10 rounded-lg relative'>
                <img src={ menu } onClick={ overlay } className=' absolute top-6 right-6' alt="" />
                <div className=" flex flex-col justify-center items-center space-y-8">
                    <Link to='/'><p className=" font-Mulish text-base text-black font-medium">Home</p></Link>
                    <Link to='/about'><p className=" font-Mulish text-base text-black font-medium">About Us</p></Link>
                    <Link to='/businesses'><p className=" font-Mulish text-base text-black font-medium">Our Buisnesses</p></Link>
                    <Link to='/newsroom'><p className=" font-Mulish text-base text-black font-medium">Newsroom</p></Link>
                    <Link to='/careers'><p className=" font-Mulish text-base text-black font-medium">Career</p></Link>
                    <Link to='/contactus'><p className=" font-Mulish text-base text-black font-medium">Contact</p></Link>
                </div>
            </div>
        </motion.div>

        <div className=" w-full px-5 md:px-8 lg:px-24 py-5 flex flex-row justify-between items-center border-b border-[#D6D6D6]">
            <Link to='/'><img src={ logo } alt="" /></Link>
            <span className=" hidden lg:flex flex-row items-center space-x-16">
                <Link to='/'><p className=' font-Mulish text-base font-semibold text-[#06191F]'>Home</p></Link>
                <Link to='/about'><p className=' font-Mulish text-base font-semibold text-[#06191F]'>About us</p></Link>
                <Link to ='/businesses'><span className=' flex flex-row items-center space-x-2'>
                    <p className=' font-Mulish text-base font-semibold text-[#06191F]'>Our businesses</p>
                    <img src={ angledown } className=' mt-1' alt="" />
                </span></Link>
                <Link to='/newsroom'><p className=' font-Mulish text-base font-semibold text-[#06191F]'>Newsroom</p></Link>
                <Link to='/careers'><p className=' font-Mulish text-base font-semibold text-[#06191F]'>Careers</p></Link>
                <Link to='/contactus'><p className=' font-Mulish text-base font-semibold text-[#06191F]'>Contact</p></Link>
            </span>
            <img src={ menu }  onClick={ overlay } className='block lg:hidden' alt="" />
        </div>
        </>
     );
}
 
export default Navbar; 