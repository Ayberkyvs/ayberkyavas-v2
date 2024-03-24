import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"
import { motion } from "framer-motion";

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center w-screen max-w-[708px] px-[10px] md:p-0'>
        <motion.div className='gradient-top w-full max-w-[1440px] h-[659px]' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}></motion.div> 
          <Header />
          <Outlet />
        <motion.div className='gradient-bottom w-full max-w-[1440px] h-[659px]' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 1}}></motion.div> 
    </div>
  )
}
