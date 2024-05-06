import { DataContext } from "@/App"
import { lazy, useContext } from "react"
import { Pin } from "iconoir-react";
const Hero = lazy(()=> import("@/components/Hero/Hero"));
const ProjectCards = lazy(()=> import("@/components/ProjectCards"));
const HorizontalScrollCards = lazy(()=> import("@/components/HorizontalScrollCards"));
const Sayhi = lazy(()=> import("@/components/Sayhi/Sayhi"));

export default function Home() {
  const data = useContext(DataContext).en
  return (
    <section className="w-full h-fit pt-[136px] md:pt-[126px]" >
        <Hero data={data.hero}/>
        <ProjectCards data={data.featured} icon={<Pin />}/>
        <ProjectCards data={data.certificates}/>
        <HorizontalScrollCards data={data.works} />
        <Sayhi />
    </section>
  )
}