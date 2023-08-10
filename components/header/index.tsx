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
      <div className="container mx-auto -mb-14 w-full flex items-center justify-between bg-white p-4 px-10 rounded-full shadow-md z-10">
        <Logo size={100} />
        <div className="flex items-center">
          {output}
        </div>
        <Link className="sub-button p-2 px-6 rounded-full" href="/">
          Get Started
        </Link>
      </div>
    </div>
  )
}
