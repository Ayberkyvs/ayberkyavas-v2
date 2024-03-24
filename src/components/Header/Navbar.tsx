type MenuItem = {
  text: string;
  link: string;
}
type NavbarProps = {
  data: MenuItem[];
}
export default function Navbar({data}: NavbarProps) {
  console.log(data)
  return (
    <nav>
        <ul className="hidden md:flex w-[402px] h-[24px] text-[16px] text-black gap-[24px] dark:text-white">
          {data.map((item: MenuItem, index: number) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
          ))}
        </ul>
    </nav>
  )
}
