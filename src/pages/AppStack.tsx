import { DataContext } from "@/App";
import ProjectCard from "@/components/ProjectCard";
import Stackcards from "@/components/Stackcards";
import { useContext } from "react";

export default function AppStack() {
    const data = useContext(DataContext).en.appstack

  return (
    <section className="w-[full] max-w-[708px] pt-[136px] md:pt-[126px]">

        <div className="flex flex-col justify-center items-center text-center w-full h-[180px] mt-[38px]">
            <div className="max-w-[355px]">
                <h1 className="text-3xl text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text font-bold">App Stack</h1>
                <p className="text-base text-center text-primary-text mt-[12px]">Sharing my on-the-go app stack from working, managing, entertaining and more</p>
            </div>
        </div>

        <div className="w-full max-w-[492px] h-fit">
            {
                data.map((item)=> {
                    return <Stackcards data={item}/>
                })
            }
        </div>
    </section>
  )
}
