import { assets } from "@/constants";
import Image from "next/image";
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
    <Image
      width={props.size}
      src={assets.logo}
      alt="logo"
      className={image_classname}
    />
  )
}

Logo.defaultProps = {
  showBorder: false,
  size: 20
}

export default Logo;
