import ScrollingList from "@/components/ScrollingList";
import { FileText, BadgeCheck } from "lucide-react";

export default function Hero({data}: {data: any}) {
  return (
    <section className="w-full h-fit overflow-hidden">
        <div className="flex items-center gap-[16px] w-fit h-[102px] ">
            <img src={data.image} alt="Ayberk Memoji" className="w-[84px] h-[84px] bg-link-blue rounded-full" draggable={false}/>
            <div>
                <h1 className="flex items-center justify-center gap-2 heading-1 leading-[1.1em] whitespace-nowrap font-semibold">{data.title}  <BadgeCheck className="text-link-blue w-[0.8em] h-[0.8em] place-self-center"/></h1>
                <p className="text-light-gray text-base leading-6">{data.subtitle}</p>
            </div>
        </div>
        <p className="w-full h-fit font-normal text-primary-text text-base md:text-lg mt-[18px]">{data.paragraph}</p>
        <p className="text-light-gray mt-[8px] leading-6 text-base md:text-lg font-medium">{data.quota} <span className="font-semibold text-transparent bg-blue bg-gradient-to-r from-current to-pink bg-clip-text">{data.company}</span></p>
        <a href={data.resume} target="_blank" className="flex justify-center items-center mt-[16px] gradient-retro text-white py-1.5 rounded-xl mb-[18px] text-sm w-full">View Resume <FileText className="ml-2 text-sm w-5 h-5"/></a>
        <div className="w-screen overflow-hidden flex md:block">
          <ScrollingList data={data.skills}/>
        </div>
    </section>
  )
}
