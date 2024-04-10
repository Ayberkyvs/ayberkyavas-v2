import { DataContext } from "@/App"
import { useContext } from "react"
import { easeInOut, motion } from "framer-motion";

export default function Loader() {
    const data = useContext(DataContext).en.hero        
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
        <motion.img 
          initial={{scale: 1, rotateZ: 0}}
          animate={{scale: [0, 1, 0], rotateZ: [90, 180, 360]}}
          transition={{duration: 0.8, ease: easeInOut, repeat: Infinity, repeatType: "reverse",}}
          src={data.image} 
          alt="Ayberk Memoji" 
          className="w-[100px] h-[100px] bg-link-blue rounded-full" 
          draggable={false}
        />
    </section>
  )
}

