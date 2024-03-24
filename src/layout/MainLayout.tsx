import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-[768px] px-2'>
        <div className='gradient-top w-full min-[1440px]:w-[1440px] h-[659px]' draggable={false}></div> 
        <Header />
        <Outlet />
    </div>
  )
}
