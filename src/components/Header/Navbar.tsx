import { Link } from "react-router-dom";

type MenuItem = {
  text: string;
  link: string;
}

export default function Navbar({data, isMobile}: {data: any, isMobile?: boolean}) {
  return (
    <nav>
        <ul className={`flex ${isMobile ? "flex-col mt-[24px]" : ""} w-[402px] gap-[24px] h-fit text-sm text-black dark:text-white`}>
          {data.map((item: MenuItem, index: number) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
          ))}
        </ul>
    </nav>
  )
}