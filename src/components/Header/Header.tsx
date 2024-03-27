import { Separator } from "@/components/ui/separator"
import Navbar from "./Navbar"
import Socials from "./Socials"
import { ModeToggle } from "../mode-toggle"
import { useContext, useState } from "react"
import { DataContext } from "@/App"
import { Menu, Xmark } from "iconoir-react";
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerData = useContext(DataContext).en.header
  return (
    <header className="absolute top-0 w-screen max-w-[708px] justify-between h-fit p-[16px] rounded-2xl bg-nav-bg border-nav-border border-[1px] mt-[24px]">
        <div className="flex justify-between items-center w-full h-fit">
            <div className="flex items-center h-fit">
              <Link to="/"><img src={headerData.mainLogo} alt="Website logo with letters 'AY' in rainbow-like colors" className="w-[25px] mr-[24px] object-cover"/></Link>
              <h3 className="flex text-white mr-[24px] bg-link-blue px-2 rounded-full text-xs items-center justify-center">BETA</h3>
              <div className="w-fit h-fit hidden md:flex">
              <Navbar data={headerData.navbar}/>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <Socials data={headerData.socials}/>
              <Separator orientation="vertical" className="border-black/50 dark:border-white/50 border-[0.5px] h-[18px] w-fit z-[3]"/>
              <ModeToggle className=" w-[18px] h-[18px] text-black dark:text-white z-[3]"/>
              <button className="flex md:hidden justify-center items-center text-primary-text z-[3] w-[18px] h-[18px]" onClick={()=> setIsOpen(prevState => !prevState)}>{isOpen ? <Xmark /> : <Menu />}</button>
            </div>
        </div>
        {isOpen &&
        <div className="w-fit h-fit flex md:hidden">
          <Navbar data={headerData.navbar} isMobile={true}/>
        </div>
        }
    </header>
  )
}