import {
  TransitionOpacity,
  TransitionParentInView,
  TransitionParentInViewFast,
} from '@/lib/utils/transitions';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className="cursor-pointer"
  >
    <circle cx="20.5" cy="20.1328" r="20" fill="white" />
    <path
      d="M29.2071 20.8399C29.5976 20.4494 29.5976 19.8162 29.2071 19.4257L22.8431 13.0617C22.4526 12.6712 21.8195 12.6712 21.4289 13.0617C21.0384 13.4523 21.0384 14.0854 21.4289 14.476L27.0858 20.1328L21.4289 25.7897C21.0384 26.1802 21.0384 26.8134 21.4289 27.2039C21.8195 27.5944 22.4526 27.5944 22.8431 27.2039L29.2071 20.8399ZM12.5 21.1328H28.5V19.1328H12.5V21.1328Z"
      fill="#003F7C"
    />
  </svg>
);

const PreviousArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className="cursor-pointer"
  >
    <circle
      cx="20"
      cy="20"
      r="19.5"
      transform="matrix(-1 0 0 1 40.5 0.132812)"
      stroke="white"
    />
    <path
      d="M11.7929 19.4257C11.4024 19.8162 11.4024 20.4494 11.7929 20.8399L18.1569 27.2039C18.5474 27.5944 19.1805 27.5944 19.5711 27.2039C19.9616 26.8134 19.9616 26.1802 19.5711 25.7897L13.9142 20.1328L19.5711 14.476C19.9616 14.0854 19.9616 13.4523 19.5711 13.0617C19.1805 12.6712 18.5474 12.6712 18.1569 13.0617L11.7929 19.4257ZM28.5 19.1328L12.5 19.1328L12.5 21.1328L28.5 21.1328L28.5 19.1328Z"
      fill="white"
    />
  </svg>
);

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <NextArrow />,
    // previousArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      title: 'Get Electricity',
      description: `Empower your life with GetElectricity! From seamless token purchases to reliable electricity solutions, Join us in transforming the way you access and manage electricity. Light up your world with GetElectricity today`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M15.749 3.13281L11.999 9.13281H14.249V13.6328L17.999 7.63281H15.749V3.13281ZM8.60498 12.8828C6.20705 12.8828 3.03125 14.2026 3.03125 14.2026L3.5835 15.5972C3.5835 15.5972 6.81191 14.3828 8.60498 14.3828C9.33011 14.3828 10.5695 14.8215 11.5801 15.3379C12.0854 15.5961 12.5438 15.8689 12.8779 16.0908C13.045 16.2018 13.1809 16.3006 13.2705 16.3721C13.2915 16.3888 13.2999 16.4 13.3159 16.416C13.3405 16.4386 13.3651 16.4608 13.3848 16.4863L13.4346 16.5625C13.5296 16.7411 13.5259 16.9593 13.3979 17.1426C13.2522 17.3497 12.9954 17.4299 12.7563 17.3491L9.49268 15.7964L8.84814 17.1499L12.2173 18.7524L12.2554 18.7656C13.123 19.0697 14.096 18.7594 14.6255 18.0068V18.0054C14.9242 17.5801 15.0288 17.0771 14.9741 16.5933L18.5557 16.0088H18.5571C18.955 15.9425 19.3294 16.169 19.4565 16.5508C19.5913 16.9554 19.407 17.3756 19.0186 17.5469C17.9197 18.0311 16.1315 18.755 14.5435 19.3516C13.7494 19.6499 13.004 19.917 12.4238 20.106C12.1337 20.2004 11.8833 20.2746 11.6987 20.3228C11.5141 20.3709 11.359 20.3828 11.4351 20.3828C11.4822 20.3828 11.17 20.3111 10.8169 20.1206C10.4638 19.9301 10.0325 19.6567 9.58936 19.375C9.1462 19.0933 8.69169 18.8042 8.25488 18.5723C7.81808 18.3404 7.42913 18.1328 6.89844 18.1328C5.67149 18.1328 4.57666 18.6074 4.57666 18.6074L5.14941 19.9946C5.14941 19.9946 6.08088 19.6328 6.89844 19.6328C6.87887 19.6328 7.19241 19.7065 7.55029 19.8965C7.90818 20.0865 8.34194 20.3598 8.78369 20.6406C9.22545 20.9214 9.67631 21.2106 10.105 21.4419C10.5337 21.6732 10.9026 21.8828 11.4351 21.8828C11.6911 21.8828 11.8468 21.8347 12.0781 21.7744C12.3094 21.7141 12.5803 21.6315 12.8882 21.5312C13.5039 21.3307 14.2635 21.0582 15.0708 20.7549C16.6855 20.1483 18.4807 19.423 19.6235 18.9194C20.7081 18.4412 21.2541 17.2001 20.8804 16.0776C20.5233 15.0054 19.4271 14.3452 18.3125 14.5293H18.3096L14.2065 15.1987C14.194 15.1887 14.1742 15.1767 14.1611 15.1665C14.1453 15.1548 14.1334 15.1398 14.1172 15.1284L13.8975 14.9731L13.896 14.9761C13.8305 14.9303 13.7804 14.89 13.707 14.8413C13.3186 14.5834 12.8202 14.2868 12.2627 14.002C11.1478 13.4323 9.83586 12.8828 8.60498 12.8828Z"
            fill="#00C2FF"
          />
        </svg>
      ),
      color: '#00C2FF26',
    },
    {
      title: 'Pay Bills',
      description: `Experience the seamless convenience of GetEnergy Pay Bills, your one-stop solution for effortless payments. From airtime, data to cable TV and government payments, manage all your expenses in one place with ease`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M10.75 2.63281C9.785 2.63281 9 3.41781 9 4.38281V12.8828C9 12.9153 9.00827 12.9455 9.00977 12.9775L10.5 12.0918V5.63281C11.33 5.63281 12 4.96281 12 4.13281H22.25C22.6645 4.13281 23 3.79681 23 3.38281C23 2.96881 22.6645 2.63281 22.25 2.63281H10.75ZM18.5 5.13281C16.8455 5.13281 15.5 6.70331 15.5 8.63281C15.5 10.5623 16.8455 12.1328 18.5 12.1328C20.1545 12.1328 21.5 10.5623 21.5 8.63281C21.5 6.70331 20.1545 5.13281 18.5 5.13281ZM12.5 7.63281C12.2348 7.63281 11.9804 7.73817 11.7929 7.92571C11.6054 8.11324 11.5 8.3676 11.5 8.63281C11.5 8.89803 11.6054 9.15238 11.7929 9.33992C11.9804 9.52746 12.2348 9.63281 12.5 9.63281C12.7652 9.63281 13.0196 9.52746 13.2071 9.33992C13.3946 9.15238 13.5 8.89803 13.5 8.63281C13.5 8.3676 13.3946 8.11324 13.2071 7.92571C13.0196 7.73817 12.7652 7.63281 12.5 7.63281ZM8 7.88086L6.53027 8.33301C5.65977 8.60051 4.91607 9.17598 4.43457 9.95898L1.10742 15.4971C1.03492 15.6181 1.00293 15.7513 1.00293 15.8828H1V20.8828C1 21.2968 1.336 21.6328 1.75 21.6328H5.83496C6.92046 21.6328 7.95462 21.2235 8.74512 20.4805L14.9395 14.7432C15.2945 14.4067 15.493 13.9519 15.5 13.4629C15.507 12.9739 15.3191 12.5149 14.9736 12.1689C14.3746 11.5694 13.4561 11.4684 12.7461 11.9199L8.34863 14.5273C8.22813 14.5993 8.09582 14.6328 7.96582 14.6328C7.70982 14.6328 7.46031 14.5021 7.32031 14.2666C7.10881 13.9101 7.22603 13.4498 7.58203 13.2383L8 12.9902V7.88086ZM16.4707 13.1328C16.4832 13.2468 16.5015 13.3596 16.5 13.4766C16.4945 13.8846 16.3966 14.2743 16.2266 14.6328H22.25C22.6645 14.6328 23 14.2968 23 13.8828C23 13.4688 22.6645 13.1328 22.25 13.1328H16.4707Z"
            fill="#FFCD55"
          />
        </svg>
      ),
      color: '#FFCD5526',
    },
    {
      title: 'Energy E-Commerce',
      description: `Explore a world of energy solutions with GetEnergy E-Commerce. From solar panels to energy-efficient appliances, discover a diverse range of products to power up your life. Shop conveniently`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M9.48688 0.875092C9.24292 0.87866 9.00996 0.977187 8.83747 1.14975L4.07306 5.91416C2.82622 6.10115 1.83602 7.09664 1.69758 8.38486L0.139959 22.7708C0.0580838 23.5608 0.314842 24.3536 0.847967 24.9461C1.38047 25.5368 2.14219 25.8751 2.93781 25.8751H21.0628C21.8584 25.8751 22.6195 25.5362 23.1527 24.9449C23.6852 24.3537 23.9432 23.5615 23.8607 22.7684L22.303 8.38486C22.1649 7.09902 21.1768 6.10382 19.9337 5.91416L15.7882 1.77475C15.6994 1.68593 15.5937 1.61585 15.4773 1.56867C15.3609 1.52149 15.2362 1.49817 15.1107 1.50009C14.8671 1.50398 14.6347 1.60248 14.4625 1.77475L12.6253 3.61191L10.1632 1.14975C10.0745 1.06108 9.969 0.991087 9.85284 0.94391C9.73668 0.896734 9.61224 0.873333 9.48688 0.875092ZM9.50031 3.13828L11.8319 5.46982C11.9022 5.57628 11.9936 5.66725 12.1004 5.73715L12.2383 5.87509H6.76349L9.50031 3.13828ZM15.1253 3.76328L17.2408 5.87509H14.8885L13.951 4.93759L15.1253 3.76328ZM7.31281 10.2501C7.83031 10.2501 8.25031 10.6701 8.25031 11.1876V14.6251C8.25031 16.6932 9.93219 18.3751 12.0003 18.3751C14.0684 18.3751 15.7503 16.6932 15.7503 14.6251V11.1876C15.7503 10.6701 16.1703 10.2501 16.6878 10.2501C17.2053 10.2501 17.6253 10.6701 17.6253 11.1876V14.6251C17.6253 17.727 15.1022 20.2501 12.0003 20.2501C8.89843 20.2501 6.37531 17.727 6.37531 14.6251V11.1876C6.37531 10.6701 6.79531 10.2501 7.31281 10.2501Z"
            fill="#00C16E"
          />
        </svg>
      ),
      color: '#00C16E26',
    },
    {
      title: 'Invest in Energy',
      description: `nvest in renewable energy projects, from solar farms to wind turbines, and contribute to a sustainable future. Explore opportunities that align with your values and financial goals.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M9.48688 0.875092C9.24292 0.87866 9.00996 0.977187 8.83747 1.14975L4.07306 5.91416C2.82622 6.10115 1.83602 7.09664 1.69758 8.38486L0.139959 22.7708C0.0580838 23.5608 0.314842 24.3536 0.847967 24.9461C1.38047 25.5368 2.14219 25.8751 2.93781 25.8751H21.0628C21.8584 25.8751 22.6195 25.5362 23.1527 24.9449C23.6852 24.3537 23.9432 23.5615 23.8607 22.7684L22.303 8.38486C22.1649 7.09902 21.1768 6.10382 19.9337 5.91416L15.7882 1.77475C15.6994 1.68593 15.5937 1.61585 15.4773 1.56867C15.3609 1.52149 15.2362 1.49817 15.1107 1.50009C14.8671 1.50398 14.6347 1.60248 14.4625 1.77475L12.6253 3.61191L10.1632 1.14975C10.0745 1.06108 9.969 0.991087 9.85284 0.94391C9.73668 0.896734 9.61224 0.873333 9.48688 0.875092ZM9.50031 3.13828L11.8319 5.46982C11.9022 5.57628 11.9936 5.66725 12.1004 5.73715L12.2383 5.87509H6.76349L9.50031 3.13828ZM15.1253 3.76328L17.2408 5.87509H14.8885L13.951 4.93759L15.1253 3.76328ZM7.31281 10.2501C7.83031 10.2501 8.25031 10.6701 8.25031 11.1876V14.6251C8.25031 16.6932 9.93219 18.3751 12.0003 18.3751C14.0684 18.3751 15.7503 16.6932 15.7503 14.6251V11.1876C15.7503 10.6701 16.1703 10.2501 16.6878 10.2501C17.2053 10.2501 17.6253 10.6701 17.6253 11.1876V14.6251C17.6253 17.727 15.1022 20.2501 12.0003 20.2501C8.89843 20.2501 6.37531 17.727 6.37531 14.6251V11.1876C6.37531 10.6701 6.79531 10.2501 7.31281 10.2501Z"
            fill="#00C16E"
          />
        </svg>
      ),
      color: '#00C16E26',
    },
  ];

  return (
    <>
      <section className="bg-primaryBlue text-white py-[4rem] w-full mt-40">
        <TransitionParentInView className="max-w-3xl text-center mx-auto space-y-3">
          <TransitionOpacity>
            <p className="text-primaryBlue font-bold px-7 py-4 w-fit mx-auto rounded-full bg-white/90">
              Services
            </p>
          </TransitionOpacity>
          <TransitionOpacity>
            <h3 className="font-extrabold text-white/70 text-3xl md:text-4xl leading-relaxed">
              Ignite Your World with{' '}
              <span className="text-white">GetEnergy</span> Transformative
              Powering Solutions
            </h3>
          </TransitionOpacity>
          <TransitionOpacity>
            <p className="text-center text-white/70 text-sm md:text-base">
              We offer amazing services to suit our customer needs
            </p>
          </TransitionOpacity>
        </TransitionParentInView>

        <div className="container mx-auto mt-16 flex items-center justify-between gap-6 px-6">
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-8 px-4">
            {data.slice(0, 3).map((item, id) => (
              <div key={id} className="w-full">
                <TransitionOpacity className="w-full rounded-xl p-4 md:p-8 text-black py-12 space-y-4 bg-white">
            
                  <div
                    className="w-12 h-12 rounded-full grid place-content-center"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="w-full font-bold text-xl">{item.title}</h4>
                  <p className="w-full text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
           
                </TransitionOpacity>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
