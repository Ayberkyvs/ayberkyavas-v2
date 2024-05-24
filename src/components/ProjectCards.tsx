import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';

export default function ProjectCards({data, icon}: {data: any, icon?: any}) {
  const [renderCards, setRenderCards] = useState<any[]>([])
  const [loadedCount, setLoadedCount] = useState(0);
  const ProjectCards = data.items.map((item: string[], index: number)=> {
    return(
    <motion.div 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{duration: 1}}
      id='card'
      className='w-full md:w-fit h-fit'
      key={index}
    >
      <ProjectCard data={item}/>
    </motion.div>
    )
  })
  useEffect(()=> {
    loadMore()
  },[])
  const loadMore = ()=> {
    let newCards = [];
    const startIndex = loadedCount;
    const endIndex = loadedCount + 3;
    for(let i = startIndex; i < endIndex; i++){
      if (ProjectCards[i]){
        newCards.push(ProjectCards[i]);
      }
    }
    setLoadedCount(endIndex);
    setRenderCards(prev => [...prev, ...newCards]);
  }
  return (
    <section className='flex flex-col w-full h-fit mt-[56px]'>
        <div className='w-full h-fit mb-[14px]'>
            <h2 className='flex items-center uppercase text-sm text-light-gray tracking-widest'>{data.title} ({data.items.length}) {icon ? <span className='ml-1'>{icon}</span>: ""}</h2>
        </div>
        <div className='flex flex-wrap gap-[14px] mb-[14px]'>
          {renderCards}
        </div>
        <div className='flex justify-center items-center'>
          {renderCards.length === ProjectCards.length ? null : <span className='flex text-link-blue text-[16px] cursor-pointer' onClick={()=> loadMore()}>Show More <ChevronDown /></span>} 
        </div>
    </section>
  )
}