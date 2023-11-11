import Link from "next/link";
import Logo from "../../logo";
import { company_links, products_data } from "./data";
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto w-full rounded-2xl p-4 lg:p-10 bg-white flex flex-col lg:flex-row drop-shadow-md">
        <div className="w-full lg:w-6/12">
          <Logo size={300} />
          <p className="me-10 lg:me-44 my-5 text-gray-600">
            Here At The GetEnergy, We Offer You The Most Affordable And Cheapest Services.
          </p>
          <div className="w-3/5 md:w-3/6 lg:w-2/6 flex items-center justify-between">
            <Link href="/">
              <FiLinkedin size="25px" />
            </Link>

            <Link href="/">
              <FiInstagram size="25px" />
            </Link>

            <Link href="/">
              <FiFacebook size="25px" />
            </Link>

            <Link href="/">
              <FiYoutube size="25px" />
            </Link>

            <Link href="/">
              <FiTwitter size="25px" />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-6/12 mt-10 lg:mt-0 grid grid-cols-2 gap-5">
          <div className="w-full">
            <h1 className="font-bold text-4xl">Products</h1>
            <div className="flex flex-col mt-3">
              {products_data.map((link) => (
                <Link key={link._id} href="#" className="w-full mb-2 hover:underline">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full">
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
    </div>
  );
}
