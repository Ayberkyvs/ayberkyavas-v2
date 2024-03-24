import { Separator } from "@/components/ui/separator"
import Navbar from "./Navbar"
import Socials from "./Socials"
import { ModeToggle } from "../mode-toggle"
import { useContext } from "react"
import { DataContext } from "@/App"


export default function Header() {
  const headerData = useContext(DataContext).en.header
  return (
    <header className="flex items-center justify-between w-full h-fit p-[16px] rounded-2xl bg-nav-bg border-nav-border border-[1px] mt-[24px]">
        <div className="flex items-center w-fit h-fit">
            <img src={headerData.mainLogo} className="w-[25px] mr-[24px]"/>
            <Navbar data={headerData.navbar}/>
        </div>
        <div className="flex items-center gap-[12px]">
            <Socials data={headerData.socials}/>
            <Separator orientation="vertical" className="border-light-grey border-[0.5px] h-[18px] w-fit"/>
            <ModeToggle className=" w-[18px] h-[18px] text-black dark:text-white"/>
        </div>
    </header>
  )
}