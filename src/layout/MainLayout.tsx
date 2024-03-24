import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center w-screen max-w-[768px] overflow-hidden px-[10px]'>
        <div className='gradient-top w-full max-w-[1440px] h-[659px]' draggable={false}></div> 
          <Header />
          <Outlet />
    </div>
  )
}
