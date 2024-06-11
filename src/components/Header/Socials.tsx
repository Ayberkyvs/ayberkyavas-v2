import { Coffee, Github, Instagram, Linkedin, Mail, Phone, Link } from 'lucide-react';

type SocialsItem = {
  title: string;
  link: string;
  icon: string;
};
type SocialsProps = SocialsItem[];

export default function Socials({className, data}: {className?: string, data: SocialsProps}) {
  return (
    <ul className={className} aria-label="Social Media Accounts">
        {data.map((item: SocialsItem, index: number) => (
          <li key={index} className="hover:text-primary-text">
            <a href={item.link} title={item.title} aria-label={item.title + " button"}>
              {item.icon === "Github" ? <Github className="w-4 h-4"/> 
              : item.icon === "Linkedin" ? <Linkedin className="w-4 h-4"/> 
              : item.icon === "Instagram" ? <Instagram className="w-4 h-4"/> 
              : item.icon === "Buymeacoffee" ? <Coffee className="w-4 h-4" />
              : item.icon === "Phone" ? <Phone className="w-4 h-4"/>
              : item.icon === "Mail" ? <Mail className="w-4 h-4" />
              : <Link className="w-4 h-4"/>}
            </a>
          </li>
        ))}
    </ul>
  )
}
