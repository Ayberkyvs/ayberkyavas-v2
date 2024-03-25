import { Link } from "iconoir-react"
import BadgeElement from "./BadgeElement"

export default function Certificate({data}: {data: any}) {
  return (
    <a className="relative flex flex-col w-[224px] items-center
    rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[#1E1C32]/50 
    to-[#2B161D]/50 md:min-h-[302px] h-fit p-[12px] text-primary-text cursor-pointer" href={data.link ? data.link : undefined} target={data.link ? "_blank": undefined}>
      <BadgeElement className={`${data.badgeText ? "flex": "hidden"} justify-center items-center absolute w-fit h-[16px] px-[8px] py-[4px] text-[8px] md:text-[10px] uppercase top-[20px] left-[20px] text-white`} variant={data.badgeType}>{data.badgeText}</BadgeElement>
        <img src={data.image} alt="" className="rounded md:w-[200px] md:h-[200px] mb-[8px]" draggable={false}/>
        <div className="flex flex-col">
            <h2 className="inline justify-start items-center text-base font-bold mr-2">{data.title} {data.link ? <Link className="inline text-link-blue"/>: ""}</h2>
            <p className="text-[13px] text-light-gray">{data.company}</p>
            <p className="text-sm text-primary-text-60">{data.paragraph}</p>
        </div>
    </a>
  )
}
