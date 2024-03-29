import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";

export default function ProjectCards({data, icon}: {data: any, icon?: any}) {
  const ProjectCards = data.items.map((item: string[], index: number)=> {
    return(
    <motion.div 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      id='card'
      className='w-full md:w-fit h-fit'
      key={index}
    >
      <ProjectCard data={item}/>
    </motion.div>
    )
  })
  return (
    <section className='flex flex-col w-full h-fit mt-[56px]'>
        <div className='w-full h-fit mb-[14px]'>
            <h3 className='flex items-center uppercase text-sm text-light-gray tracking-widest'>{data.title} {icon ? <span className='ml-1'>{icon}</span>: ""}</h3>
        </div>
        <div className='flex flex-wrap gap-[14px]'>
          {ProjectCards}
        </div>
    </section>
  )
}

