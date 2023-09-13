import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { assets } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { createPopper } from "@popperjs/core";

export default function Download() {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef<HTMLButtonElement>();
  const popoverRef = React.createRef<HTMLInputElement>();
  const btnRightRef = React.createRef<HTMLButtonElement>();

  const openTooltip = (side:any, btnRefi:any, popoverRef:any) => {
    setPopoverShow(false);
    
    createPopper(btnRefi.current, popoverRef.current, {
      placement: side
    });
  
    setPopoverShow(true);
  };

  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <div className="w-full relative lg:rounded-3xl bg-white lg:bg-[#003B6D] h-[300px]">
      <Image
        src={assets.download_bg}
        alt='background'
        className='hidden lg:block w-full h-full object-cover absolute top-0 left-0 z-10'
      />
      <div className='absolute top-0 left-0 w-full z-20 h-full flex flex-col items-center justify-center'>
        <h1 className='text-sky-800 lg:text-white font-bold text-xl lg:text-3xl mb-4 text-center'>
          GetEnergy Mobile App Coming Soon
        </h1>
        <p className='w-full md:w-4/6 lg:w-2/4 text-xs lg:text-md text-gray-300 text-center px-5'>
          Join us on this exciting journey as we
          empower you to optimize your energy
          trading strategies,
          unlock new opportunities, and achieve
          financial success.
        </p>
        <div className="w-full md:w-6/12 lg:w-4/12 flex items-center justify-between mt-6 px-5">
          <button className="text-xs lg:text-sm flex items-center text-white bg-black p-3 px-4 rounded-md hover:scale-[1.06]" type="button" 
            onMouseEnter={() => openTooltip("left", btnRef, popoverRef)}
            onMouseLeave={closeTooltip}
            ref={btnRef}
            onClick={() => openTooltip("left", btnRef, popoverRef)}
          >
            <FaApple size="20px" className="me-2" />
            <span>Get on Apple Store</span>
          </button>

          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className="bg-white text-dark font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
              >
                Coming Soon
              </div>
              <div className="bg-white text-dark p-3">
              Join us on this exciting journey as we
              empower you to optimize your energy
              trading strategies,
              unlock new opportunities, and achieve
              financial success.
              </div>
            </div>
          </div>

          <button className="text-xs border lg:border-0 lg:text-sm flex items-center text-black bg-white p-3 px-4 rounded-md hover:scale-[1.06]" type="button"
            onMouseEnter={() => openTooltip("right", btnRightRef, popoverRef)}
            onMouseLeave={closeTooltip}
            ref={btnRightRef}
            onClick={() => openTooltip("right", btnRightRef, popoverRef)}
          >
            <FaGooglePlay size="20px" className="me-2" />
            <span>Get on Google Store</span>
          </button>

          
          
        </div>
      </div>
    </div>
  )
}
