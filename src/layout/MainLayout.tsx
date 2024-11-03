import Header from "@/components/Header/Header"
import { lazy } from "react"
import { Outlet } from "react-router-dom"
import Footer from "@/components/Footer/Footer";
import Scrolltotop from "@/components/Scrolltotop/Scrolltotop";
const BackgroundGradient = lazy(()=> import("@/components/BackgroundGradient"));

export default function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center w-screen max-w-[708px] px-[10px] md:p-0'>
      <BackgroundGradient variant="header" />
        <Header />
        <main className="flex w-full h-full items-center justify-center">
          <Outlet />
        </main>
        <Footer />
        <Scrolltotop />
      <BackgroundGradient variant="footer" />
    </div>
  )
}
