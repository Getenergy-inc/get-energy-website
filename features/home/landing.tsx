import Link from "next/link";
import LandingImage from "./landing-img";

export default function Landing() {
  return (
    <div className="w-full flex items-center py-10 pt-24">
      <div className="w-7/12">
        <h1 className="text-4xl font-bold pe-60 leading-[45px]">
          <span>Unlocking Sustainable Energy Solutions, Discover the Power of</span>
          <span className="main-text ms-3">GetEnergy</span>
        </h1>
        <p className="w-full text-sm my-5 pe-72 mb-8">
          We are a leading provider of
          energy trading solutions,
          offering a comprehnsive range of
          services to clients in the energy sector
        </p>
        <Link className="main-button p-3 px-10 text-sm rounded-full" href="/">
          Get Started
        </Link>
      </div>
      <div className="w-5/12">
        <LandingImage />
        <div className="w-[500px] h-[800px] absolute top-0 right-0" style={{ background: 'rgba(102, 153, 204, 0.6)' }} />
      </div>
    </div>
  )
}
