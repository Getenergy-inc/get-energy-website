import { our_functions } from './data';
export default function OurFunctions() {

    return (
        <div className='w-full flex justify-center'>
            <div className="container w-full my-10 flex flex-wrap justify-center">
                <div className='w-full text-center my-5 mb-10'>
                    <h1 className='main-text text-4xl font-bold'>Why Choose Us?</h1>
                    <h2 className='text-2xl font-bold text-gray-500 mt-2'>We offer amazing services.</h2>
                </div>
                {our_functions.map((item, idx) => (
                    <div className='w-full md:w-[calc(97%/2)] lg:w-[calc(98%/3)] relative m-1 text-gray-600 text-start rounded-xl p-12 py-32' key={item._id}>
                        <div className='p-2 absolute top-0 left-0 shadow-xl rounded-xl px-4'>
                            <h1>0{idx + 1}</h1>
                        </div>
                        <p className='font-bold text-center'>{item.title}</p>
                        <p className='text-sm mt-4'>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
