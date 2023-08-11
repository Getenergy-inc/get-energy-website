import { our_functions } from './data';
export default function OurFunctions() {

  return (
    <div className='w-full flex justify-center'>
      <div className="container w-full my-10 flex flex-wrap justify-center">
        {our_functions.map((item) => (
          <div className='w-full md:w-[calc(97%/2)] lg:w-[calc(98%/3)] m-1 main-bg text-white text-center rounded-xl p-12 py-32' key={item._id}>
            <p className='font-bold'>{item.title}</p>
            <p className='text-sm mt-4'>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
