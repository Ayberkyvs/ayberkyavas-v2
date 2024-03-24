import { BadgeCheck } from "iconoir-react";
import Memoji from "../../assets/ayberk_memoji.png";
import ScrollingList from "@/components/ScrollingList";

export default function Hero() {
  return (
    <section className="w-full h-fit">
        <div className="flex items-center gap-[16px] w-fit h-[102px] mb-[18px]">
            <img src={Memoji} alt="Ayberk Memoji" className="w-[100px] h-[100px] bg-link-blue rounded-full" draggable={false}/>
            <div>
                <h1 className="flex items-center justify-center gap-2 heading-1 mb-[4px] whitespace-nowrap">ayberk yavaş  <BadgeCheck className="text-link-blue w-[25px] h-[25px]"/></h1>
                <p className="text-light-gray text-base font-semibold">Frontend Developer</p>
            </div>
        </div>
        <p className="w-full h-fit text-primary-text text-lg mb-[18px]">Resourceful professional with successful track record in developing innovative web designs and features. Possesses solid knowledge of HTML, CSS, SCSS, Tailwind, JavaScript, TypeScript, React, Database with ability to quickly learn new technologies. Demonstrated success in identifying and resolving complex code issues.</p>
        <p className="text-light-gray mb-[16px]">I enjoy coding for <span className="text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text">@myself</span></p>
        <div className="w-full overflow-hidden hidden md:block">
          <ScrollingList />
        </div>
    </section>
  )
}
