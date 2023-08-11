import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface LogoProps {
  size?: number
  showBorder?: boolean
  classnames?: string
}

function Logo(props: LogoProps) {
  const image_classname = classNames([
    {
      "border rounded-xl p-4 bg-white": props.showBorder
    },
    props.classnames
  ]);

  return (
    <Link href="/">
      <Image
        width={props.size}
        src={assets.logo}
        alt="logo"
        className={image_classname}
      />
    </Link>
  )
}

Logo.defaultProps = {
  showBorder: false,
  size: 20
}

export default Logo;
