import Link from "next/link";
import Logo from "../logo";
import { company_links, products_data } from './data';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto w-full rounded-2xl p-10 bg-white flex drop-shadow-md">
        <div className="w-full md:w-6/12">
          <Logo size={300} />
          <p className="me-44 my-5">
            Here At The GetEnergy, We Offer You The
            Most Affordable And Cheapest Services.
          </p>
          <div className="w-1/5 flex items-center justify-between">
            <FiLinkedin size="25px" />
            <FiInstagram size="25px" />
            <FiFacebook size="25px" />
            <FiTwitter size="25px" />
          </div>
        </div>

        <div className="w-full md:w-3/12">
          <h1 className="font-bold text-4xl">Products</h1>
          <div className="flex flex-col mt-3">
            {products_data.map((link) => (
              <Link key={link._id} href={link.url} className="w-full mb-2 hover:underline">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/12">
          <h1 className="font-bold text-4xl">Company</h1>
          <div className="flex flex-col mt-3">
            {company_links.map((link) => (
              <Link key={link._id} href={link.url} className="w-full mb-2 hover:underline">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
