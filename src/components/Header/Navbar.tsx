
import { motion } from "framer-motion";

type MenuItem = {
  text: string;
  link: string;
}

export default function Navbar({data, isMobile}: {data: any, isMobile?: boolean}) {
  console.log(data)
  return (
    <nav>
        <ul className={`flex ${isMobile ? "flex-col mt-[24px]" : ""} w-[402px] gap-[24px] h-fit text-[16px] text-black dark:text-white`}>
          {data.map((item: MenuItem, index: number) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
          ))}
        </ul>
    </nav>
  )
}