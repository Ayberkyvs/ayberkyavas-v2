export default function Heading({title, description}: {title:string, description:string}) {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-[180px]">
        <div className="max-w-[355px]">
            <h1 className="text-3xl text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text font-bold">{title}</h1>
            <p className="text-base text-center text-primary-text mt-[12px]">{description}</p>
        </div>
    </div>
  )
}
