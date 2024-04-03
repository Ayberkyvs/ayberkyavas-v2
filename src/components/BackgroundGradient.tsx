import { motion } from "framer-motion";

export default function BackgroundGradient({variant}: {variant: string}) {
    if (variant === "header") {
        return <motion.div className='gradient-top w-full md:max-w-[1440px] h-[659px] overflow-hidden' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} aria-disabled="true"></motion.div> 
    }else if (variant === "footer") {
        return <motion.div className='gradient-bottom w-full md:max-w-[1440px] h-[659px] overflow-hidden' draggable={false} initial={{opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} aria-disabled="true"></motion.div> 
    }else {
        return <></>
    }
}

