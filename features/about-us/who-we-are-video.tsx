import { assets } from "@/constants";
import Image from "next/image";

export default function WhoWeAreVideo() {
    return (
        <div className='w-full flex justify-center'>
            <div className="container my-10 w-full">
                <Image
                    src={assets.about_us_2}
                    className="w-full"
                    alt="get-energy-video"
                />
            </div>
        </div>
    )
}
