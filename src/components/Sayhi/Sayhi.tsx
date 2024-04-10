import { Mail } from "iconoir-react";
import MessageBubble from "../../assets/sayhi.webp"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Sayhi({className}: {className?: string}) {
  return (
    <section className={`flex flex-col-reverse md:flex-row justify-center items-center gap-[25px] bg-hover-bg-1 border-[1px] border-nav-border rounded-xl p-[32px] ${className}`}>
        <div className="flex flex-col justify-center items-start w-[314px] h-[229px]">
            <h1 className="py-3 text-[40px] text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text font-bold mb-[20px]">Say hi!</h1>
            <p className="text-[21px] text-primary-text mb-[24px] leading-[32px] font-medium">Want to create something awesome? Or, you have any query? Drop an email.</p>
            <Link to={"mailto:contact@ayberkyavas.com"} className="flex items-center text-transparent bg-link-blue bg-gradient-to-r from-current to-pink bg-clip-text"><Mail className="w-5 h-5 mr-1 text-link-blue"/>contact@ayberkyavas.com</Link>
        </div>
        <div className="flex justify-center items-center w-auto h-[275px]">
            <LazyLoadImage src={MessageBubble} alt="Two 3D looking message bubbles with gradient colors" className="w-full h-full object-cover" draggable={false}  loading="lazy" />
        </div>
    </section>
  )
}