import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
    let error:any = useRouteError();
    console.log(error)
  return (
    <section className="flex w-full h-fit pt-[136px] md:pt-[126px]">
        <div className="flex flex-col justify-center gap-[64px] items-center w-full h-[50vh] text-primary-text text-center">
            <h1 
            className="w-fit h-fit text-[130px] font-bold tracking-tighter shadow-xl mb-[12px]">
                Error
            </h1>
            <div className="flex flex-col items-center gap-6">
            <p className="inline-flex text-primary-text-60">Something is not right. If you're dev please check the console!</p>
            <Button className="w-fit h-fit p-2 px-4 bg-primary-text text-white dark:text-black"><Link to={"/"}>Go to Homepage</Link></Button>
            </div>
        </div>
    </section>
  )
}