import BadgeElement from "./BadgeElement"

export default function ProjectCard({align, data}: {align?: boolean, data: any}) {
  console.log(data)
  return (
    <div className={`relative flex w-full md:w-[224px] items-center md:flex-col rounded-[16px] bg-transparent hover:bg-gradient-to-r
     from-[#1E1C32]/50 to-[#2B161D]/50 md:min-h-[302px] h-fit p-[12px]
      text-primary-text ${align ? "flex-row-reverse" : ""}`}>
        <BadgeElement className={`${data.badgeText ? "flex": "hidden"} justify-center items-center absolute w-fit h-[16px] px-[8px] py-[4px] text-[6px] md:text-[10px] uppercase top-[25px] text-primary-text ${align ? "right-[25px]" : "left-[25px]"}`} variant={data.badgeType}>{data.badgeText}</BadgeElement>
        <img src={data.image} alt="" className="rounded-xl mr-[12px] md:mr-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-[8px]" draggable={false}/>
        <div className={`flex flex-col ${align ? "text-right": "text-left"}`}>
            <h2 className="text-base font-bold">{data.title}</h2>
            <p className="text-[13px] text-light-gray">{data.company}</p>
            <p className="text-sm text-primary-text-60">{data.paragraph}</p>
        </div>
    </div>
  )
}