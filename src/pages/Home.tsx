import Hero from "@/components/Hero/Hero";
import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App"
import { useContext } from "react"
import Certificates from "@/components/Certificates";
import { Pin } from "iconoir-react";

export default function Home() {
  const data = useContext(DataContext).en
  return (
    <main className="w-full h-fit pt-[136px] md:pt-[126px]" >
        <Hero data={data.hero}/>
        <ProjectCards data={data.featured} icon={<Pin />}/>
        <ProjectCards data={data.certificates}/>
        <Certificates data={data.works} />
    </main>
  )
}
