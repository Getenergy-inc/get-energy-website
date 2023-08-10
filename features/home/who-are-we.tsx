import Logo from "@/components/logo";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

export default function WhoAreWe() {
  return (
    <div className="w-full rounded-xl p-20 shadow-md">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <h1 className="text-6xl font-bold main-text border-b-8 border-sky-900">Who we are</h1>
        </div>

        <div className="w-full flex items-center">
          <div className="w-1/3">
            <div className="w-full py-32 rounded-2xl flex items-center justify-center shadow-xl">
              <Logo size={300} classnames="shadow-md p-4 px-6 rounded-xl" />
            </div>
          </div>

          <div className="w-2/3 p-28 text-gray-600">
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
