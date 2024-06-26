import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App";
import { useContext } from "react";
import Sayhi from "@/components/Sayhi/Sayhi";
import Heading from "@/components/Heading";

const title:string = "Projects"
const description:string = "I share my projects and the work I do on this page."

export default function Projects() {
  const data = useContext(DataContext).en
  return (
    <section className="w-full h-fit pt-[136px] md:pt-[126px]">
        <Heading title={title} description={description}/>
        <ProjectCards data={data.works} showAll={true}/>
        <Sayhi className="mt-[64px]"/>
    </section>
  )
}