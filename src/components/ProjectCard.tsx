import Placeholder from "../assets/Overlayz.png"
import BadgeElement from "./BadgeElement"

export default function ProjectCard() {
  return (
    <div className="relative flex flex-row items-center md:flex-col rounded-[16px] bg-transparent hover:bg-gradient-to-r from-[#1E1C32]/50 to-[#2B161D]/50 w-full md:w-[224px] md:min-h-[302px] h-fit p-[12px] text-primary-text">
        <BadgeElement className="flex justify-center items-center absolute top-[25px] left-[25px] w-[39px] h-[16px] text-[10px] uppercase" >NEW</BadgeElement>
        <img src={Placeholder} alt="" className="rounded mr-[12px] md:mr-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-[8px]" draggable={false}/>
        <div className="flex flex-col">
            <h2 className="text-base font-bold mb-[2px]">Dream Studio</h2>
            <p className="text-sm text-primary-text-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corporis vel officiis excepturi </p>
        </div>
    </div>
  )
}