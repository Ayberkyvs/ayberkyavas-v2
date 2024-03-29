import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function HorizontalScrollCards({data}: {data: any}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  const cards = data.items.map((item:string[], index: number)=> {
    return(
    <motion.div 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      id='card'
      className='w-full md:w-fit h-fit'
      key={index}
    >
      <ProjectCard data={item} isResponsive={false} />
    </motion.div>
  )
  })
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex flex-col w-full h-screen justify-center items-start overflow-hidden">
      <div className='w-full h-fit mb-[10px]'>
          <h3 className='uppercase text-sm text-light-gray tracking-widest'>{data.title}</h3>
      </div>
        <motion.div style={{ x }} className="flex gap-4">
          {cards}
        </motion.div>
      </div>
    </section>
  )
}
