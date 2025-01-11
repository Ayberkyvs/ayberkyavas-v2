import { DataContext } from "@/App"
import { lazy, useContext } from "react"
import { Book, FolderGit, Pin } from "lucide-react";
const Hero = lazy(()=> import("@/components/Hero/Hero"));
const ProjectCards = lazy(()=> import("@/components/ProjectCards"));
const HorizontalScrollCards = lazy(()=> import("@/components/HorizontalScrollCards"));
const Sayhi = lazy(()=> import("@/components/Sayhi/Sayhi"));

export default function Home() {
  const data = useContext(DataContext).en
  return (
    <div className="w-full h-fit pt-[60px] md:pt-[80px]" >
      <Hero data={data.hero}/>
      <ProjectCards data={data.featured} icon={<Pin className="w-5 h-5"/>}/>
      <ProjectCards data={data.certificates} icon={<Book className="w-5 h-5"/>}/>
      <ProjectCards data={data.works} icon={<FolderGit className="w-5 h-5" />} />
      <HorizontalScrollCards data={data.references} />
      <Sayhi />
    </div>
  )
}

