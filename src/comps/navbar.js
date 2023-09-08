import logo from '../images/logo.svg';
import angledown from '../images/angledown.svg';
import menu from '../images/menu.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" w-full px-3 md:px-8 lg:px-24 py-5 flex flex-row justify-between items-center border-b border-[#D6D6D6]">
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
            <img src={ menu } className='block md:hidden' alt="" />
        </div>
        </>
     );
}
 
export default Navbar; 