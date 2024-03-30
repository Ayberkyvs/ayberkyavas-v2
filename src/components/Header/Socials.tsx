import { Donate, Github, Instagram, Link, Linkedin } from "iconoir-react"

type SocialsItem = {
  title: string;
  link: string;
  icon: string;
};
type SocialsProps = SocialsItem[];

export default function Socials({className, data}: {className: string, data: SocialsProps}) {
  return (
    <ul className={className} aria-label="Social Media Accounts">
        {data.map((item: SocialsItem, index: number) => (
          <a key={index} href={item.link} title={item.title} aria-label={item.title + " button"}>
            {item.icon === "Github" ? <Github className="w-[18px] h-[18px]"/> 
            : item.icon === "Linkedin" ? <Linkedin className="w-[18px] h-[18px]"/> 
            : item.icon === "Instagram" ? <Instagram className="w-[18px] h-[18px]"/> 
            : item.icon === "Buymeacoffee" ? <Donate className="w-[19px] h-[19px]" />
            : <Link className="w-[18px] h-[18px]"/>}
          </a>
        ))}
    </ul>
  )
}
