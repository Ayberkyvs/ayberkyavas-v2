import { BadgeCheck } from "iconoir-react";
import ScrollingList from "@/components/ScrollingList";
import { DownloadCloudIcon } from "lucide-react";

export default function Hero({data}: {data: any}) {
  return (
    <section className="w-full h-fit overflow-hidden">
        <div className="flex items-center gap-[16px] w-fit h-[102px] mb-[18px]">
            <img src={data.image} alt="Ayberk Memoji" className="w-[100px] h-[100px] bg-link-blue rounded-full" draggable={false}/>
            <div>
                <h1 className="flex items-center justify-center gap-2 heading-1 mb-[4px] whitespace-nowrap">{data.title}  <BadgeCheck className="text-link-blue w-[25px] h-[25px]"/></h1>
                <p className="text-light-gray text-base font-semibold">{data.subtitle}</p>
            </div>
        </div>
        <p className="w-full h-fit text-primary-text text-base md:text-xl mb-[18px]">{data.paragraph}</p>
        <a href={data.resume} download={true} className="flex justify-center items-center gradient-retro text-white py-1 rounded-full mb-[18px] text-sm">Download Resume <DownloadCloudIcon className="ml-2 text-sm"/></a>
        <p className="text-light-gray mb-[16px]">{data.quota} <span className="text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text">{data.company}</span></p>
        <div className="w-screen overflow-hidden flex md:block">
          <ScrollingList data={data.skills}/>
        </div>
    </section>
  )
}
