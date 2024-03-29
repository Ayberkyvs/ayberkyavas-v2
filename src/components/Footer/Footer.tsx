import Socials from "../Header/Socials";
import { useContext } from "react"
import { DataContext } from "@/App"

export default function Footer() {
    const headerData = useContext(DataContext).en.header
  return (
    <footer className="flex flex-col gap-[16px] justify-center items-center w-full h-[258px] mt-[50px]">
        <h3 className="text-base text-light-gray">Ayberk Yavaş</h3>
        <div className="w-fit h-fit">
            <Socials data={headerData.socials} className="flex gap-[24px] w-fit h-fit text-light-gray z-[3]"/>
        </div>
    </footer>
  )
}

