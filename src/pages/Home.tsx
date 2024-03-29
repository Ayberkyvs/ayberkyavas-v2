import Hero from "@/components/Hero/Hero";
import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App"
import { useContext } from "react"
import HorizontalScrollCards from "@/components/HorizontalScrollCards";
import { Pin } from "iconoir-react";
import Sayhi from "@/components/Sayhi/Sayhi";

export default function Home() {
  const data = useContext(DataContext).en
  return (
    <main className="w-full h-fit pt-[136px] md:pt-[126px]" >
        <Hero data={data.hero}/>
        <ProjectCards data={data.featured} icon={<Pin />}/>
        <ProjectCards data={data.certificates}/>
        <HorizontalScrollCards data={data.works} />
        <Sayhi />
    </main>
  )
}
