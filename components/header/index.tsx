import { FaBars } from 'react-icons/fa'
import { links } from "./data";
import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  const output = links.map((link) => (
    <Link key={link._id} href={link.url} className="px-6 hover:underline">
      {link.title}
    </Link>
  ));

  return (
    <div className="bg-white w-full flex items-center justify-center p-6">
      <div className="container flex lg:hidden items-center justify-between">
        <Logo size={100} />

        <button type="button">
          <FaBars size="20px" />
        </button>
      </div>


      <div className="hidden lg:flex container mx-auto -mb-14 w-full items-center justify-between bg-white p-4 px-10 rounded-full shadow-md z-10">
        <Logo size={100} />
        <div className="flex items-center">
          {output}
        </div>
        <Link className="sub-button p-2 px-6 rounded-full" href="/quick-buy">
          Get Started
        </Link>
      </div>
    </div>
  )
}
