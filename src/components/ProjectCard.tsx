import { Link as RouterLink} from "react-router-dom"
import BadgeElement from "./BadgeElement"
import { Link } from "iconoir-react"
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectCard({ data, isResponsive = true }: { data: any, isResponsive?: boolean}) {
  return (
    <RouterLink className={`relative flex items-center rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[rgba(255,233,244,0.4)] to-[rgba(234,243,255,0.6)]
     dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 h-fit p-[12px]
      text-primary-text cursor-pointer ${isResponsive ? "md:flex-col w-full md:w-[224px] md:min-h-[352px]" : "w-[224px] flex-col md:min-h-[302px]"}`} to={data.link ? data.link : undefined}>
        <BadgeElement className={`${data.badgeText ? "flex": "hidden"} justify-center items-center absolute w-fit h-[16px] px-[8px] py-[4px] text-[8px] md:text-[10px] uppercase top-[20px] left-[20px] text-white`} variant={data.badgeType}>{data.badgeText}</BadgeElement>
        <LazyLoadImage src={data.image} alt="" className={`${isResponsive ? "w-[100px] h-[100px] mr-[12px] md:mr-0" : "w-[200px] h-[200px]"} rounded-xl md:w-[200px] md:h-[200px] mb-[8px]`} draggable={false}/>
        <div className={`flex flex-col`}>
            <h3 className="inline justify-start items-center text-base font-bold mr-2">{data.title} {data.link ? <Link className="inline text-link-blue"/>: ""}</h3>
            <p className="text-[13px] text-light-gray leading-[1.5em]">{data.company}</p>
            <p className="text-sm text-primary-text-60 leading-[1.5em]">{data.paragraph}</p>
        </div>
    </RouterLink>
  )
}