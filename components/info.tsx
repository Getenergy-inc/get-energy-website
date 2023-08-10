type InfoProps = {
  body: string
}

export default function Info(props: InfoProps) {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="container flex justify-center">
        <p className="w-2/4 text-xl text-center text-gray-600 leading-[30px]">
          {props.body}
        </p>
      </div>
    </div>
  )
}
