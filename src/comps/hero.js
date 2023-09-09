import angleright from '../images/Angle-right.svg';
import mobright from '../images/mobright.svg';
import swipe from '../images/swipe.svg';
import swipeone from '../images/swipeone.svg';
import swipetwo from '../images/swipetwo.svg';
import swipethree from '../images/swipethree.svg';
import ceo from '../images/ceo.svg';
import bizHero from '../images/bizhero.svg';
import heroThree from '../images/heroThree.svg';
import heroFour from '../images/heroFour.svg';
import mobHero from '../images/mobHero.svg';
import bizheromob from '../images/bizheromob.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
 
const Hero = () => {
    // swipe function
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const controls = useAnimation();

    const desktopBackgroundImageUrls = [
        ceo,
        bizHero,
        heroThree,
        heroFour
    ];

    const mobileBackgroundImageUrls = [
        mobHero,
        bizheromob,
    ];

    const swipeImageUrls = [
        swipe,
        swipeone,
        swipetwo,
        swipethree
    ];

    const isMobileScreen = window.innerWidth <= 768;

    useEffect(() => {
        const handleResize = () => {
          // Check if the screen size has changed and update isMobileScreen
          const newIsMobileScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
          if (newIsMobileScreen !== isMobileScreen) {
            setCurrentIndex(0); // Reset the index when switching between mobile and desktop
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [isMobileScreen]);

    const backgroundImageUrls = isMobileScreen
    ? mobileBackgroundImageUrls
    : desktopBackgroundImageUrls;

    const Herotxt = [
        'A speech from our CEO',
        'Transformation is here',
        'Transformation is here',
        'Transformation is here',
    ];

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
      };
    
      const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
      };
    
      const handleTouchEnd = () => {
        if (startX !== null && endX !== null) {
          const swipeDistance = endX - startX;
    
          if (swipeDistance > 50) {
            // Swipe right
            controls.start({ x:'0%' }); // Animate to the left
            setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? backgroundImageUrls.length - 1 : prevIndex - 1
        );
          } else if (swipeDistance < -50) {
            // Swipe left
            controls.start({ x:'0%' }); // Animate to the right
            setCurrentIndex((prevIndex) =>
            prevIndex === backgroundImageUrls.length - 1 ? 0 : prevIndex + 1
            );
          }
        }

        // Reset the start and end values after a delay
        setTimeout(() => {
          setStartX(null);
          setEndX(null);
          controls.start({ x: '0%' }); // Reset position to initial
        }, 300); // Adjust the delay as needed to match the animation duration
      };

    //   const handleNextClick = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === backgroundImageUrls.length - 1 ? 0 : prevIndex + 1
    //     );
    //   };
    
    //   const handlePrevClick = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === 0 ? backgroundImageUrls.length - 1 : prevIndex - 1
    //     );
    //   };

    // Slideshow functionality
    useEffect(() => {
      const slideshowInterval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === backgroundImageUrls.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => {
        clearInterval(slideshowInterval);
      };
    }, [backgroundImageUrls]);
    
      const currentBackgroundImageUrl = backgroundImageUrls[currentIndex];
      const currentImageText = Herotxt[currentIndex];
      const currentSwipeImage = swipeImageUrls[currentIndex];
;

    return ( 
        <>
        <div className=" md:p-14 px-3  py-5 w-full h-[90vh] swipe-container-parent">
            <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                backgroundImage: `url(${currentBackgroundImageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            animate={controls}
            transition={{stiffness:0}}
            className=" w-full h-[100%] swipe-container bg-[#06191F] rounded-[30px] bg-cover relative">
                <span className=" absolute bottom-8 left-4 md:bottom-[64px] md:left-[64px] space-y-4">
                    <p className=" font-Mulish font-semibold text-[24px] md:text-[48px] text-[#fff]">{currentImageText}</p>
                    <span className=" flex flex-row space-x-2 items-center">
                        <Link to='/about'><p className=" font-Mulish text-base md:text-2xl font-normal text-white">Find out more</p></Link>
                        <img src={ angleright } className=' mt-1 hidden md:block' alt="" />
                        <img src={ mobright } className=' block md:hidden mt-1' alt="" />
                    </span>
                </span>
                <span className=' absolute bottom-5 w-full hidden md:flex justify-center items-center'>
                    <img src={ currentSwipeImage } className='' alt="" />
                </span>
            </div>
        </div>
        </>
     );
}
 
export default Hero;