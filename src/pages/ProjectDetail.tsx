import { Separator } from "@radix-ui/react-separator";
import { Coffee, Github, Link, Linkedin, Mail } from "lucide-react";
import { redirect, useLoaderData, LoaderFunction, Navigate } from "react-router-dom";

export const loader: LoaderFunction = async ({ params }) => {
    try {
      const response = await fetch(`/api/projects/${params.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.projects;
    } catch (err) {
      console.error(err);
      return redirect('/');
    }
  };

type ProjectData = {
    title: string;
    paragraph: string;
    image: string;
    content: string[];
    links: string[];
};


export default function ProjectDetail() {
    const { title, paragraph, image, content, links } = useLoaderData() as ProjectData
    if (!(title || paragraph || image || content || links)){
        return <Navigate to={'/*'}/>
    }

    return (
    <section className='flex flex-col justify-center items-center w-full h-fit pt-[136px] md:pt-[126px]'>
        <div className="flex flex-col justify-center items-center max-w-[500px] w-full h-[180px] mb-[24px]">
            <h1 className="text-2xl mb-[12px] text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text font-bold">{title}</h1>
            <p className="text-base text-center text-primary-text mb-[12px] leading-[1.5em]">{paragraph}</p>
            <Separator className="w-full border-[1px] border-black/50 dark:border-white/50"/>
        </div>
        <div className="w-full h-[422px] mb-[48px]">
            <img src={image} alt="Project Banner" className="w-full h-full object-cover" />
        </div>
        {
            content?.map((item: any, index: number)=> {
                return(
                    <div className="w-full h-fit mb-[48px] max-w-[500px]" key={index}>
                        <h3 className='flex items-center uppercase text-sm text-light-gray tracking-widest mb-[16px]'>{item.title}</h3>
                        <p className="text-primary-text text-base leading-[1.5em]">{item.paragraph}</p>
                    </div>
                )
            })
        }
        <div className="flex flex-col justify-center items-center w-full h-fit text-primary-text max-w-[500px]">
            <h3 className='flex items-center uppercase text-sm text-light-gray tracking-widest mb-[16px]'>Links</h3>
            <div className="flex gap-[24px]">
        {
            links?.map((item: any, index: number)=> {
                return (
                    <a href={item.link} key={index}>{item.icon === "link" ? <Link /> 
                    : item.icon === "github" ? <Github /> 
                    : item.icon === "linkedin" ? <Linkedin />
                    : item.icon === "buymeacoffe" ? <Coffee /> 
                    : item.icon === "email" ? <Mail />
                    : <Link />}
                    </a>
                )
            })
        }
            </div>
        </div>
    </section>
    )
}