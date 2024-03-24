import ProjectCard from './ProjectCard'

export default function ProjectCards() {
  return (
    <section className='flex flex-col w-full h-fit mt-[56px]'>
        <div className='w-full h-fit mb-[14px]'>
            <h3 className='uppercase text-sm text-light-gray tracking-widest'>current work</h3>
        </div>
        <div className='flex flex-wrap gap-[14px]'>
        <ProjectCard />        
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
        </div>
    </section>
  )
}
