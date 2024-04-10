import { motion } from "framer-motion";

export default function BackgroundGradient({variant}: {variant: string}) {
    return (
        <motion.div className={`${variant === "header" ? "gradient-top" : "gradient-bottom"} w-full md:max-w-[1440px] h-[659px] overflow-hidden`} draggable={false} initial={{opacity: 0 }} whileInView={{opacity: 1}} transition={{duration: 0.5}} aria-disabled="true"></motion.div>
    )
}

