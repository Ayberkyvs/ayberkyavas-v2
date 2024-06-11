import { Link as RouterLink} from "react-router-dom";
import BadgeElement from "./BadgeElement";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Award, Link } from "lucide-react";

export default function ProjectCard({ data, isResponsive = true }: { data: any, isResponsive?: boolean}) {
  return (
    <RouterLink className={`flex items-center rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[rgba(255,233,244,0.4)] to-[rgba(234,243,255,0.6)]
     dark:from-[#1E1C32]/50 dark:to-[#2B161D]/50 h-fit p-[12px]
      text-primary-text cursor-pointer ${isResponsive ? "md:flex-col w-full md:w-[224px] md:min-h-[352px]" : "w-[224px] flex-col md:min-h-[302px]"}`} to={data.link ? data.link : undefined}>
        <div className={`relative ${isResponsive ? "w-[100px] h-[100px] min-w-[100px] min-h-[100px] mr-[12px] md:mr-0" : "w-[200px] h-[200px] min-w-[200px] min-h-[200px]"} rounded-xl md:w-[200px] md:h-[200px] mb-[8px]`}>
          <BadgeElement className={`absolute top-[8px] left-[8px] ${data.badgeText ? "flex": "hidden"} justify-center items-center w-fit h-[16px] px-[6px] py-[0px] text-[8px] md:text-[10px] uppercase text-white`} variant={data.badgeType}>{data.badgeText}</BadgeElement>
          <LazyLoadImage src={data.image} alt={data.company + " logo"} className="w-full h-full rounded-xl" draggable={false} />
        </div>
        <div className={`flex flex-col w-fit h-fit`}>
            <h3 className="inline justify-start items-center text-base font-bold mr-2">{data.title} {data?.link && data?.type === "work" ? <Link className="inline text-link-blue w-5 h-5"/> : data?.link && data?.type === "certificate" ? <Award className="inline text-link-blue w-5 h-5" /> : ""}</h3>
            <p className="text-[13px] text-light-gray leading-[1.5em]">{data.company}</p>
            <p className="text-sm text-primary-text-60 leading-[1.5em]">{data.paragraph}</p>
        </div>
    </RouterLink>
  )
}