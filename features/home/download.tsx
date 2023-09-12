import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { assets } from '@/constants';
import Image from 'next/image';

export default function Download() {
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
          <button disabled={true} className="text-xs lg:text-sm flex items-center text-white bg-black p-3 px-4 rounded-md hover:scale-[1.06]" type="button">
            <FaApple size="20px" className="me-2" />
            <span>Get on Apple Store</span>
          </button>

          <button disabled={true} className="text-xs border lg:border-0 lg:text-sm flex items-center text-black bg-white p-3 px-4 rounded-md hover:scale-[1.06]" type="button">
            <FaGooglePlay size="20px" className="me-2" />
            <span>Get on Google Store</span>
          </button>
        </div>
      </div>
    </div>
  )
}
