import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface LogoProps {
  size?: number;
  showBorder?: boolean;
  classnames?: string;
  id?: string;
}

function Logo({ showBorder = false, size = 20, ...remaining }: LogoProps) {
  const image_classname = classNames([
    {
      "border rounded-xl p-4 bg-white": showBorder,
    },
    remaining.classnames,
  ]);

  return (
    <Link href="/">
      <Image width={size} src={assets.logo} id={remaining.id} alt="logo" className={image_classname} />
    </Link>
  );
}

export default Logo;
