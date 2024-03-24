import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Certificate from "./Certificate";

export default function Certificates({title}: {title:string}) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="relative w-full h-fit bg-transparent mt-[65px]">
        <div className='w-full h-fit mb-[14px]'>
            <h3 className='uppercase text-sm text-light-gray tracking-widest'>{title}</h3>
        </div>
      <div className="sticky top-0 flex w-full h-fit items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
            <Certificate />
            <Certificate />
            <Certificate />
            <Certificate />
            <Certificate />
        </motion.div>
      </div>
    </section>
  )
}
