import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App";
import { useContext } from "react";
import Sayhi from "@/components/Sayhi/Sayhi";
export default function Projects() {
  const data = useContext(DataContext).en
  
  return (
    <section className="w-full h-fit pt-[136px] md:pt-[126px]">
        <ProjectCards data={data.works}/>
        <Sayhi className="mt-[64px]"/>
    </section>
  )
}