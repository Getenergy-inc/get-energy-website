import { TransitionFromRight, TransitionOpacityAlone, TransitionParentInView } from "@/lib/utils/transitions";
import { vendingData } from "./data";

const CommunityElectricityVending = () => {
  return (
    <section className="grid grid-cols-2 gap-20" id="community-electricity-vending">
      <div className="relative flex py-10 pl-10 justify-center">
        <div className="absolute -top-10 left-0 z-10">
          <PeopleSVG />
        </div>
        <div className="absolute -bottom-28 -right-10 z-10">
          <StarSVG />
        </div>

        <TransitionOpacityAlone className="w-full space-y-4 h-full border rounded-xl p-6 bg-white z-20">
          <TransitionOpacityAlone>
            <p className="font-bold text-xl">Community Electricity Vending</p>
          </TransitionOpacityAlone>
          <form onClick={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="communityName">
                    Community Name
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="fullName">
                    Representative Full Name
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
              </div>

              <div>
                <label className="font-medium text-sm" htmlFor="communityAddress">
                  Community Address
                </label>
                <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="cityOrTown">
                    City/Town
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="country">
                    Country
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="phoneNumber">
                    Mobile Number
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input type="text" className="w-full outline-none p-3 rounded-sm border border-zinc-200" />
                </div>
              </div>
            </div>

            <div className="flex item-center mt-5 justify-center">
              <button className="w-1/2 rounded-full text-white bg-primaryBlue transition-colors duration-200 hover:bg-primaryBlueHover py-3">
                Proceed
              </button>
            </div>
          </form>
        </TransitionOpacityAlone>
      </div>

      <div className="relative">
        <div className="space-y-8">
          <TransitionOpacityAlone>
            <h3 className="font-bold text-4xl">Community Electricity Vending</h3>
          </TransitionOpacityAlone>
          <TransitionParentInView className="space-y-6">
            {vendingData.map((data, i) => (
              <TransitionFromRight key={i} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-12 rounded-full h-12 shadow-xl bg-white flex items-center justify-center">
                  <span className="font-bold text-2xl">{i + 1}.</span>
                </div>
                <div className="space-y-3 max-w-lg">
                  <p className="text-xl font-semibold">{data.title}</p>
                  <p className="text-zinc-400 leading-loose text-lg">{data.description}</p>
                </div>
              </TransitionFromRight>
            ))}
          </TransitionParentInView>

          <TransitionOpacityAlone className="grid place-content-center">
            <button className="font-bold text-primaryBlue px-6 py-3 rounded-xl bg-primaryBlue/20">
              Join Wait List
            </button>
          </TransitionOpacityAlone>
        </div>
      </div>
    </section>
  );
};

export default CommunityElectricityVending;

const StarSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="229" height="229" viewBox="0 0 229 229" fill="none">
    <g opacity="0.8" filter="url(#filter0_d_5368_33891)">
      <ellipse
        cx="65.9667"
        cy="65.8885"
        rx="65.9667"
        ry="65.8885"
        transform="matrix(0.973257 -0.229721 0.230488 0.973075 35 55.3047)"
        fill="white"
      />
    </g>
    <g filter="url(#filter1_d_5368_33891)">
      <ellipse
        cx="49.9748"
        cy="49.9155"
        rx="49.9748"
        ry="49.9155"
        transform="matrix(0.973234 -0.229815 0.230393 0.973097 54.2422 67.1719)"
        fill="white"
      />
    </g>
    <g filter="url(#filter2_d_5368_33891)">
      <path
        d="M107.94 77.0606L120.32 90.0789L138.294 89.739L129.722 105.52L135.6 122.487L117.922 119.222L103.581 130.047L101.228 112.249L86.4862 101.973L102.709 94.2373L107.94 77.0606Z"
        fill="#F9BB1C"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5368_33891"
        x="0.398438"
        y="0.367188"
        width="227.977"
        height="227.797"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="24" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.168627 0 0 0 0 0.435294 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5368_33891" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5368_33891" result="shape" />
      </filter>
      <filter
        id="filter1_d_5368_33891"
        x="16.3906"
        y="16.3359"
        width="195.977"
        height="195.844"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="24" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.168627 0 0 0 0 0.435294 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5368_33891" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5368_33891" result="shape" />
      </filter>
      <filter
        id="filter2_d_5368_33891"
        x="66.4844"
        y="57.0625"
        width="91.8125"
        height="92.9844"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.733333 0 0 0 0 0.109804 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5368_33891" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5368_33891" result="shape" />
      </filter>
    </defs>
  </svg>
);

const PeopleSVG = () => (
  <div className="w-32 h-32 rounded-full drop-shadow-xl bg-white/50 p-3 flex items-center justify-center">
    <div className="w-11/12 rounded-full aspect-square bg-white/70 p-6 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <path
          d="M22.5 4.5C22.1022 4.5 21.7206 4.65804 21.4393 4.93934C21.158 5.22064 21 5.60218 21 6C21 6.39782 21.158 6.77936 21.4393 7.06066C21.7206 7.34196 22.1022 7.5 22.5 7.5C22.8978 7.5 23.2794 7.34196 23.5607 7.06066C23.842 6.77936 24 6.39782 24 6C24 5.60218 23.842 5.22064 23.5607 4.93934C23.2794 4.65804 22.8978 4.5 22.5 4.5ZM18 5.70703C17.6022 5.70703 17.2206 5.86507 16.9393 6.14637C16.658 6.42768 16.5 6.80921 16.5 7.20703C16.5 7.60486 16.658 7.98639 16.9393 8.26769C17.2206 8.549 17.6022 8.70703 18 8.70703C18.3978 8.70703 18.7794 8.549 19.0607 8.26769C19.342 7.98639 19.5 7.60486 19.5 7.20703C19.5 6.80921 19.342 6.42768 19.0607 6.14637C18.7794 5.86507 18.3978 5.70703 18 5.70703ZM27 5.70703C26.6022 5.70703 26.2206 5.86507 25.9393 6.14637C25.658 6.42768 25.5 6.80921 25.5 7.20703C25.5 7.60486 25.658 7.98639 25.9393 8.26769C26.2206 8.549 26.6022 8.70703 27 8.70703C27.3978 8.70703 27.7794 8.549 28.0607 8.26769C28.342 7.98639 28.5 7.60486 28.5 7.20703C28.5 6.80921 28.342 6.42768 28.0607 6.14637C27.7794 5.86507 27.3978 5.70703 27 5.70703ZM14.707 9C14.3092 9 13.9277 9.15804 13.6464 9.43934C13.3651 9.72064 13.207 10.1022 13.207 10.5C13.207 10.8978 13.3651 11.2794 13.6464 11.5607C13.9277 11.842 14.3092 12 14.707 12C14.904 12 15.0991 11.9612 15.2811 11.8858C15.463 11.8104 15.6284 11.6999 15.7677 11.5607C15.907 11.4214 16.0175 11.256 16.0929 11.074C16.1682 10.892 16.207 10.697 16.207 10.5C16.207 10.303 16.1682 10.108 16.0929 9.92597C16.0175 9.74399 15.907 9.57863 15.7677 9.43934C15.6284 9.30005 15.463 9.18956 15.2811 9.11418C15.0991 9.0388 14.904 9 14.707 9ZM30.293 9C29.8951 9 29.5136 9.15804 29.2323 9.43934C28.951 9.72064 28.793 10.1022 28.793 10.5C28.793 10.8978 28.951 11.2794 29.2323 11.5607C29.5136 11.842 29.8951 12 30.293 12C30.6908 12 31.0723 11.842 31.3536 11.5607C31.6349 11.2794 31.793 10.8978 31.793 10.5C31.793 10.1022 31.6349 9.72064 31.3536 9.43934C31.0723 9.15804 30.6908 9 30.293 9ZM22.5 10.5C21.3065 10.5 20.1619 10.9741 19.318 11.818C18.4741 12.6619 18 13.8065 18 15C18 16.1935 18.4741 17.3381 19.318 18.182C20.1619 19.0259 21.3065 19.5 22.5 19.5C23.6935 19.5 24.8381 19.0259 25.682 18.182C26.5259 17.3381 27 16.1935 27 15C27 13.8065 26.5259 12.6619 25.682 11.818C24.8381 10.9741 23.6935 10.5 22.5 10.5ZM10.5 16.5C9.30653 16.5 8.16193 16.9741 7.31802 17.818C6.47411 18.6619 6 19.8065 6 21C6 22.1935 6.47411 23.3381 7.31802 24.182C8.16193 25.0259 9.30653 25.5 10.5 25.5C11.6935 25.5 12.8381 25.0259 13.682 24.182C14.5259 23.3381 15 22.1935 15 21C15 19.8065 14.5259 18.6619 13.682 17.818C12.8381 16.9741 11.6935 16.5 10.5 16.5ZM34.5 16.5C33.3065 16.5 32.1619 16.9741 31.318 17.818C30.4741 18.6619 30 19.8065 30 21C30 22.1935 30.4741 23.3381 31.318 24.182C32.1619 25.0259 33.3065 25.5 34.5 25.5C35.6935 25.5 36.8381 25.0259 37.682 24.182C38.5259 23.3381 39 22.1935 39 21C39 19.8065 38.5259 18.6619 37.682 17.818C36.8381 16.9741 35.6935 16.5 34.5 16.5ZM21 22.5C18.5145 22.5 16.5 24.5145 16.5 27L16.5 33C16.5 30.5145 14.4855 28.5 12 28.5L9 28.5C6.5145 28.5 4.5 30.5145 4.5 33L4.5 39L16.5 39L28.5 39L40.5 39L40.5 33C40.5 30.5145 38.4855 28.5 36 28.5L33 28.5C30.5145 28.5 28.5 30.5145 28.5 33L28.5 27C28.5 24.5145 26.4855 22.5 24 22.5L21 22.5Z"
          fill="#3491E7"
        />
      </svg>
    </div>
  </div>
);
