import Link from "next/link";
import { company_links, products_data } from "./data";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
{
  /* <Logo size={300} /> */
}
export default function Footer() {
  const socialLinks = [
    // {
    //   label: "Facebook",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    //       <path
    //         d="M0 12.5781C0 19.2055 5.37258 24.5781 12 24.5781C18.6274 24.5781 24 19.2055 24 12.5781C24 5.95071 18.6274 0.578125 12 0.578125C5.37258 0.578125 0 5.95071 0 12.5781Z"
    //         fill="#003F7C"
    //       />
    //       <path
    //         d="M18 12.5781C18 9.27812 15.3 6.57812 12 6.57812C8.7 6.57812 6 9.27812 6 12.5781C6 15.5781 8.175 18.0531 11.025 18.5031V14.3031H9.525V12.5781H11.025V11.2281C11.025 9.72812 11.925 8.90313 13.275 8.90313C13.95 8.90313 14.625 9.05313 14.625 9.05313V10.5531H13.875C13.125 10.5531 12.9 11.0031 12.9 11.4531V12.5781H14.55L14.25 14.3031H12.825V18.5781C15.825 18.1281 18 15.5781 18 12.5781Z"
    //         fill="white"
    //       />
    //     </svg>
    //   ),
    //   link: "https://twitter.com/GetenergyHQ",
    // },
    {
      label: "Twitter",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13C0 19.6274 5.37258 25 12 25C18.6274 25 24 19.6274 24 13C24 6.37258 18.6274 1 12 1C5.37258 1 0 6.37258 0 13Z"
            fill="#003F7C"
          />
          <path
            d="M12.6122 11.2717L17.2467 6H16.1483L12.1252 10.5772L8.91039 6H5.20312L10.0638 12.9222L5.20312 18.45H6.30157L10.5507 13.6158L13.9459 18.45H17.6531L12.6122 11.2717ZM11.1082 12.9827L10.6157 12.2935L6.69702 6.80925H8.38405L11.5458 11.2352L12.0382 11.9244L16.1492 17.6781H14.4621L11.1082 12.9827Z"
            fill="white"
          />
        </svg>
      ),
      link: "https://twitter.com/GetenergyHQ",
    },
    {
      label: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M0 12.5781C0 19.2055 5.37258 24.5781 12 24.5781C18.6274 24.5781 24 19.2055 24 12.5781C24 5.95071 18.6274 0.578125 12 0.578125C5.37258 0.578125 0 5.95071 0 12.5781Z"
            fill="#003F7C"
          />
          <path
            d="M11.9984 7.47656C13.6484 7.47656 13.8734 7.47656 14.5484 7.47656C15.1484 7.47656 15.4484 7.62656 15.6734 7.70156C15.9734 7.85156 16.1984 7.92656 16.4234 8.15156C16.6484 8.37656 16.7984 8.60156 16.8734 8.90156C16.9484 9.12656 17.0234 9.42656 17.0984 10.0266C17.0984 10.7016 17.0984 10.8516 17.0984 12.5766C17.0984 14.3016 17.0984 14.4516 17.0984 15.1266C17.0984 15.7266 16.9484 16.0266 16.8734 16.2516C16.7234 16.5516 16.6484 16.7766 16.4234 17.0016C16.1984 17.2266 15.9734 17.3766 15.6734 17.4516C15.4484 17.5266 15.1484 17.6016 14.5484 17.6766C13.8734 17.6766 13.7234 17.6766 11.9984 17.6766C10.2734 17.6766 10.1234 17.6766 9.44844 17.6766C8.84844 17.6766 8.54844 17.5266 8.32344 17.4516C8.02344 17.3016 7.79844 17.2266 7.57344 17.0016C7.34844 16.7766 7.19844 16.5516 7.12344 16.2516C7.04844 16.0266 6.97344 15.7266 6.89844 15.1266C6.89844 14.4516 6.89844 14.3016 6.89844 12.5766C6.89844 10.8516 6.89844 10.7016 6.89844 10.0266C6.89844 9.42656 7.04844 9.12656 7.12344 8.90156C7.27344 8.60156 7.34844 8.37656 7.57344 8.15156C7.79844 7.92656 8.02344 7.77656 8.32344 7.70156C8.54844 7.62656 8.84844 7.55156 9.44844 7.47656C10.1234 7.47656 10.3484 7.47656 11.9984 7.47656ZM11.9984 6.35156C10.2734 6.35156 10.1234 6.35156 9.44844 6.35156C8.77344 6.35156 8.32344 6.50156 7.94844 6.65156C7.57344 6.80156 7.19844 7.02656 6.82344 7.40156C6.44844 7.77656 6.29844 8.07656 6.07344 8.52656C5.92344 8.90156 5.84844 9.35156 5.77344 10.0266C5.77344 10.7016 5.77344 10.9266 5.77344 12.5766C5.77344 14.3016 5.77344 14.4516 5.77344 15.1266C5.77344 15.8016 5.92344 16.2516 6.07344 16.6266C6.22344 17.0016 6.44844 17.3766 6.82344 17.7516C7.19844 18.1266 7.49844 18.2766 7.94844 18.5016C8.32344 18.6516 8.77344 18.7266 9.44844 18.8016C10.1234 18.8016 10.3484 18.8016 11.9984 18.8016C13.6484 18.8016 13.8734 18.8016 14.5484 18.8016C15.2234 18.8016 15.6734 18.6516 16.0484 18.5016C16.4234 18.3516 16.7984 18.1266 17.1734 17.7516C17.5484 17.3766 17.6984 17.0766 17.9234 16.6266C18.0734 16.2516 18.1484 15.8016 18.2234 15.1266C18.2234 14.4516 18.2234 14.2266 18.2234 12.5766C18.2234 10.9266 18.2234 10.7016 18.2234 10.0266C18.2234 9.35156 18.0734 8.90156 17.9234 8.52656C17.7734 8.15156 17.5484 7.77656 17.1734 7.40156C16.7984 7.02656 16.4984 6.87656 16.0484 6.65156C15.6734 6.50156 15.2234 6.42656 14.5484 6.35156C13.8734 6.35156 13.7234 6.35156 11.9984 6.35156Z"
            fill="white"
          />
          <path
            d="M11.9984 9.35156C10.1984 9.35156 8.77344 10.7766 8.77344 12.5766C8.77344 14.3766 10.1984 15.8016 11.9984 15.8016C13.7984 15.8016 15.2234 14.3766 15.2234 12.5766C15.2234 10.7766 13.7984 9.35156 11.9984 9.35156ZM11.9984 14.6766C10.8734 14.6766 9.89844 13.7766 9.89844 12.5766C9.89844 11.4516 10.7984 10.4766 11.9984 10.4766C13.1234 10.4766 14.0984 11.3766 14.0984 12.5766C14.0984 13.7016 13.1234 14.6766 11.9984 14.6766Z"
            fill="white"
          />
          <path
            d="M15.2984 10.0266C15.7127 10.0266 16.0484 9.69078 16.0484 9.27656C16.0484 8.86235 15.7127 8.52656 15.2984 8.52656C14.8842 8.52656 14.5484 8.86235 14.5484 9.27656C14.5484 9.69078 14.8842 10.0266 15.2984 10.0266Z"
            fill="white"
          />
        </svg>
      ),
      link: "https://instagram.com/getenergyhq",
    },
    {
      label: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M0 12.5781C0 19.2055 5.37258 24.5781 12 24.5781C18.6274 24.5781 24 19.2055 24 12.5781C24 5.95071 18.6274 0.578125 12 0.578125C5.37258 0.578125 0 5.95071 0 12.5781Z"
            fill="#003F7C"
          />
          <path
            d="M8.7 18.5781H6.15V10.5531H8.7V18.5781ZM7.425 9.42813C6.6 9.42813 6 8.82812 6 8.00312C6 7.17812 6.675 6.57812 7.425 6.57812C8.25 6.57812 8.85 7.17812 8.85 8.00312C8.85 8.82812 8.25 9.42813 7.425 9.42813ZM18 18.5781H15.45V14.2281C15.45 12.9531 14.925 12.5781 14.175 12.5781C13.425 12.5781 12.675 13.1781 12.675 14.3031V18.5781H10.125V10.5531H12.525V11.6781C12.75 11.1531 13.65 10.3281 14.925 10.3281C16.35 10.3281 17.85 11.1531 17.85 13.6281V18.5781H18Z"
            fill="white"
          />
        </svg>
      ),
      link: "http://www.linkedin.com/in/getenergyng",
    },
  ];

  return (
    <footer className="w-full py-20 bg-primaryBlue text-white">
      <div className="container mx-auto w-full rounded-2xl p-4 lg:p-10 flex flex-col lg:flex-row drop-shadow-md">
        <div className="w-full">
          <h5 className="font-bold text-3xl max-w-lg">
            Taking energy into a new dimension
          </h5>
          <p className="me-10 lg:me-44 my-5 to-white/80">
            Here At The GetEnergy, We Offer You The Most Affordable And Cheapest
            Services.
          </p>
        </div>

        <div className="container mx-auto mt-10 md:-ml-10 lg:mt-0 grid lg:grid-cols-3 grid-cols-2 gap-3">
          <div className="w-full">
            <h5 className="font-bold text-3xl">Products</h5>
            <div className="flex flex-col mt-3 gap-2">
              {products_data.map((link) => (
                <Link
                  key={link._id}
                  href={link.url}
                  className="hover:border-white/50 border-transparent font-light border-b duration-300 w-fit"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full">
            <h5 className="font-bold text-3xl">Company</h5>
            <div className="flex flex-col mt-3 gap-2">
              {company_links.map((link) => (
                <Link
                  key={link._id}
                  href={link.url}
                  className="hover:border-white/50 border-transparent font-light border-b duration-300 w-fit"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full col-span-2">
            <h5 className="font-bold text-3xl">Get the App</h5>
            <div className="flex flex-col mt-3 gap-3">
              <button
                className="text-xs lg:text-sm flex items-center w-fit text-white bg-black p-3 px-4 rounded-md hover:scale-[1.06]"
                type="button"
              >
                <FaApple size="20px" className="me-2" />
                <span>Get on Apple Store</span>
              </button>
              <button
                className="text-xs border lg:border-0 lg:text-sm flex items-center w-fit text-black bg-white p-3 px-4 rounded-md hover:scale-[1.06]"
                type="button"
              >
                <FaGooglePlay size="20px" className="me-2" />
                <span>Get on Google Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full md:p-4 p-2 bg-white rounded-xl flex items-center justify-between">
          <div className="flex items-center md:gap-4 gap-2">
            {socialLinks.map((item, i) => (
              <div key={i} className="cursor-pointer" title={item.label}>
                <Link href={item.link} target="_blank">
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-black text-xs text-center sm:text-sm md:text-base">
            © 2023 GetEnergy Inc. All rights reserved.
          </p>
          <Image
            src={"/images/logos/get-energy-logo.png"}
            alt="get energy logo"
            width={130}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
