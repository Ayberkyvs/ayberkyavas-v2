import Hero from "@/components/Hero/Hero";
import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App"
import { useContext } from "react"
import Certificates from "@/components/Certificates";
 
export default function Home() {
  const data = useContext(DataContext).en
  return (
    <main className="w-full h-fit pt-[64px]">
        <Hero data={data.hero}/>
        <ProjectCards data={data.certificates}/>
        <Certificates title="as" />
        
        {/* <ProjectCards data={data.certificates}/> */}
    </main>
  )
}
