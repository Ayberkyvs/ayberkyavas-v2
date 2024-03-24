import { Github, Instagram, Linkedin } from "iconoir-react"

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
    <ul className="flex gap-[16px] w-fit h-fit text-black dark:text-white">
        {data.map((item: SocialsItem, index: number) => (
          <a key={index} href={item.link} title={item.title}>
            {item.icon === "Github" ? <Github className="w-[18px] h-[18px]"/> : item.icon === "Linkedin" ? <Linkedin className="w-[18px] h-[18px]"/> : <Instagram className="w-[18px] h-[18px]"/>}
          </a>
        ))}
    </ul>
  )
}
