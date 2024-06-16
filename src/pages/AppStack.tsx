import { DataContext } from "@/App";
import Stackcards from "@/components/Stackcards";
import { useContext } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";

const title:string = "App Stack"
const description:string = "Sharing my on-the-go app stack from working, managing, entertaining and more"
export default function AppStack() {
    const data = useContext(DataContext).en.appstack

  return (
    <section className="w-[full] max-w-[708px] pt-[136px] md:pt-[126px]">
        <Heading title={title} description={description}/>

        <div className="flex flex-col justify-center items-center w-full max-w-[492px] h-fit">
            <h3 className='flex items-center uppercase text-sm text-light-gray tracking-widest mb-[16px]'>apps</h3>
            {
                data.map((item, index: number)=> {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{ once: true }}
                        transition={{duration: 1}}
                        id='card'
                        className='w-full md:w-fit h-fit'
                        key={index}
                        >
                            <Stackcards data={item}/>
                        </motion.div>
                    )
                })
            }
        </div>
    </section>
  )
}
