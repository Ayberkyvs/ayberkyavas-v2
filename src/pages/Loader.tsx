import { DataContext } from "@/App"
import { useContext } from "react"
import { easeInOut, motion } from "framer-motion";

export default function Loader() {
    const data = useContext(DataContext).en.hero        
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
        <motion.div className='gradient-top w-full max-w-[1440px] h-[659px]' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1.5}} role="img"></motion.div>
        <motion.img 
            initial={{scale: 1}}
            animate={{scale: [0, 1, 0]}}
            transition={{duration: 0.8, ease: easeInOut, repeat: Infinity, repeatType: "reverse",}}
            src={data.image} 
            alt="Ayberk Memoji" 
            className="w-[100px] h-[100px] bg-link-blue rounded-full" 
            draggable={false}
        />
        <motion.div className='gradient-bottom w-full max-w-[1440px] h-[659px]' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1.5}} role="img"></motion.div>
    </section>
  )
}

