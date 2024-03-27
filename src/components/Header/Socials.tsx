import { Donate, Github, Instagram, Link, Linkedin } from "iconoir-react"

type SocialsItem = {
  title: string,
  link: string,
  icon: string,
}
type SocialsProps = {
  data: SocialsItem[];
}

export default function Socials({data}: SocialsProps) {
  return (
    <ul className="flex gap-[16px] w-fit h-fit text-black dark:text-white z-[3]">
        {data.map((item: SocialsItem, index: number) => (
          <a key={index} href={item.link} title={item.title}>
            {item.icon === "Github" ? <Github className="w-[18px] h-[18px]"/> 
            : item.icon === "Linkedin" ? <Linkedin className="w-[18px] h-[18px]"/> 
            : item.icon === "Instagram" ? <Instagram className="w-[18px] h-[18px]"/> 
            : item.icon === "Buymeacoffee" ? <Donate className="w-[19px] h-[19px] text-black dark:text-[#ffdd00]" />
            : <Link className="w-[18px] h-[18px]"/>}
          </a>
        ))}
    </ul>
  )
}
