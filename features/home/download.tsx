import { assets } from "@/constants";
import Image from "next/image";

export default function Download() {
  return (
    <div className="w-full border">
      <Image
        src={assets.download}
        alt="download-mobile-app"
        className="w-full"
      />
    </div>
  )
}
