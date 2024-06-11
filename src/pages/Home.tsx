import { DataContext } from "@/App"
import { lazy, useContext } from "react"
import { Pin } from "lucide-react";
const Hero = lazy(()=> import("@/components/Hero/Hero"));
const ProjectCards = lazy(()=> import("@/components/ProjectCards"));
const HorizontalScrollCards = lazy(()=> import("@/components/HorizontalScrollCards"));
const Sayhi = lazy(()=> import("@/components/Sayhi/Sayhi"));

export default function Home() {
  const data = useContext(DataContext).en
  return (
    <div className="w-full h-fit pt-[136px] md:pt-[126px]" >
      <Hero data={data.hero}/>
      <ProjectCards data={data.featured} icon={<Pin className="w-5 h-5"/>}/>
      <ProjectCards data={data.certificates}/>
      <ProjectCards data={data.works} />
      <HorizontalScrollCards data={data.references} />
      <Sayhi />
    </div>
  )
}

