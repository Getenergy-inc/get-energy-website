import { FaMinus, FaPlus } from 'react-icons/fa'
import React from "react";
import classNames from 'classnames';

type FAQProps = {
  _id: string
  title: string
  body: string
}

export default function FAQ(props: FAQProps) {
  const [show, setShow] = React.useState(false);

  const button_class = classNames([
    {
      "bg-violet-100": !show,
      "main-bg": show
    },
    "p-1 rounded-md"
  ]);

  const container_class = classNames([
    {
      "lg:h-[200px]": show,
      "lg:h-[100px]": !show
    },
    "w-full border rounded-xl bg-white p-5 lg:p-8 shadow-md"
  ])

  return (
    <div className={container_class}>
      <div className='w-full flex items-center justify-between'>
        <h1 className='pe-5'>{props.title}</h1>
        <button className={button_class} onClick={() => setShow(prev => !prev)}>
          {
            show
              ? <FaMinus color="white" />
              : <FaPlus className="text-sky-800" />
          }
        </button>
      </div>
      {
        show &&
        <div className='text-sm text-gray-500 lg:pe-20 leading-[25px] mt-4'>
          {props.body}
        </div>
      }
    </div>
  )
}
