import BadgeElement from "./BadgeElement"
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Stackcards({data}: {data: any}) {
  return (
    <div className="flex items-center justify-center w-[492] min-h-[124px] p-[12px] bg-transparent">
        <LazyLoadImage src={data.image} alt={data.title} className="w-[100px] h-full object-cover mr-[16px] rounded-xl" draggable={false}/>
        <div className="flex flex-col h-full">
            <h3 className="text-base font-bold text-primary-text mb-[5px]">{data.title} <BadgeElement variant={data.badgeType} className="ml-[6px] w-fit h-[16px] text-[11px]">{data.badgeText}</BadgeElement></h3>
            <p className="text-sm text-primary-text-60 leading-[1.5em]">{data.paragraph}</p>
        </div>
    </div>
  )
}