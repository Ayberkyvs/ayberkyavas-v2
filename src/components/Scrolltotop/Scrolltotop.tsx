import { Rabbit } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Scrolltotop() {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <>
        {showTopBtn && 
        <motion.div className="fixed flex justify-center items-center bottom-5 right-5 z-[3] bg-nav-bg border-[1px] 
        border-nav-border w-fit h-fit p-3 rounded-full text-primary-text overflow-hidden hover:cursor-pointer" 
        onClick={()=> goToTop()}
        initial={{ y: 0 }}
        animate={{ y: [3, -2, 3] }}
        transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: easeInOut,
        }}>
            <Rabbit className="w-8 h-8"/>
        </motion.div>
        }
    </>
  )
}

