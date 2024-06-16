import ProjectCards from "@/components/ProjectCards";
import { DataContext } from "@/App";
import { useContext } from "react";
import Sayhi from "@/components/Sayhi/Sayhi";
import Heading from "@/components/Heading";

const title:string = "Certificates"
const description:string = "You can view all the certificates I have received on this page."

export default function Certificates() {
  const data = useContext(DataContext).en
  return (
    <section className="w-full h-fit pt-[136px] md:pt-[126px]">
        <Heading title={title} description={description}/>
        <ProjectCards data={data.certificates} showAll={true}/>
        <Sayhi className="mt-[64px]"/>
    </section>
  )
}