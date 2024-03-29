export default function NotFound() {
  return (
    <section className="flex w-full h-fit pt-[136px] md:pt-[126px]">
        <div className="flex flex-col justify-center gap-[64px] items-center w-full h-[300px] text-primary-text text-center">
            <h1 
            className="w-fit h-fit text-[150px] font-bold tracking-tighter shadow-xl mb-[12px]">
                404
            </h1>
            <p className="inline-flex text-primary-text-60 ">The link you are trying to access may have been removed or hidden.</p>
        </div>
    </section>
  )
}

