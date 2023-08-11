import { FaArrowRight } from 'react-icons/fa';
import Logo from "@/components/logo";
import Link from "next/link";

export default function WhoAreWe() {
  return (
    <div className="w-full rounded-xl p-4 lg:p-20 shadow-md mb-10 lg:mb-0">
      <div className="w-full p-4 md:p-10 lg:p-0">
        <div className="w-full flex justify-center mb-10">
          <h1 className="text-5xl lg:text-6xl text-center font-bold main-text border-b-8 border-sky-900">Who we are</h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/3">
            <div className="w-full py-32 rounded-2xl flex items-center justify-center shadow-xl">
              <Logo size={300} classnames="shadow-md p-4 px-6 rounded-xl" />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 w-full lg:w-2/3 p-4 lg:p-28 text-gray-600">
            <p className="w-full text-justify leading-[30px]">
              At Get Energy Trading Services,
              we are driven by a passion for innovation
              and a commitment to excellence.
              Our team of experienced professionals
              combines industry knowledge, technological
              advancements, and market insights to
              deliver unparalleled energy trading
              and financial services.
            </p>
            <p className="w-full text-justify leading-[30px]">
              With a focus on efficiency, transparency,
              and sustainability, we provide a platform
              where energy suppliers, traders, investors,
              and financial institutions can connect and
              engage in seamless trading activities. We
              aim to create value for our clients, foster
              growth in the energy market, and facilitate
              access to finance for energy-related projects.
            </p>
            <Link href='/' className="mt-3 hover:underline main-text flex items-center">
              <span className="me-2">Read More</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
