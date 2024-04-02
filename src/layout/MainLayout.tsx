import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Scrolltotop from "@/components/Scrolltotop/Scrolltotop";

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center w-screen max-w-[708px] px-[10px] md:p-0'>
        <motion.div className='gradient-top w-full md:max-w-[1440px] h-[659px] overflow-hidden' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} aria-disabled="true"></motion.div> 
          <Header />
          <Outlet />
          <Footer />
          <Scrolltotop />
        <motion.div className='gradient-bottom w-full md:max-w-[1440px] h-[659px] overflow-hidden' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} aria-disabled="true"></motion.div> 
    </div>
  )
}
