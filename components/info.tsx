type InfoProps = {
  body: string
}

export default function Info(props: InfoProps) {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="container flex justify-center">
        <p className="p-4 md:p-0 w-4/4 md:w-3/4 lg:w-2/4 text-xl text-center text-gray-600 leading-[30px]">
          {props.body}
        </p>
      </div>
    </div>
  )
}
