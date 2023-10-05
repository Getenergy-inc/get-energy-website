import Image from "next/image"
import { assets } from "@/constants"

export default function IlluminatingTomorrow() {
    return (
        <div className='w-full flex justify-center'>
            <div className="container my-10 w-full">
                <div className="flex flex-col md:flex-row bg-[#00597833] rounded-xl">
                    <div className="w-full md:w-1/2 p-12">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">Illuminating Tomorrow, Today.</h1>
                        <p className="mt-5 md:text-xl leading-8">
                            At Get Energy, we're not just redefining the
                            future of energy; we're powering it. Dive into our
                            story of innovation, sustainability, and unyielding
                            commitment to a greener, more efficient world.
                            Join us in shaping the energy landscape of tomorrow."
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={assets.about_us_1}
                            alt="get-energy"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
