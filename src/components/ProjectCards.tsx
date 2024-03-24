import ProjectCard from './ProjectCard'

export default function ProjectCards({data}: {data: any}) {
  const ProjectCards = data.items.map((item: string[])=> {
    return <ProjectCard data={item}/>
  })
  return (
    <section className='flex flex-col w-full h-fit mt-[56px]'>
        <div className='w-full h-fit mb-[14px]'>
            <h3 className='uppercase text-sm text-light-gray tracking-widest'>{data.title}</h3>
        </div>
        <div className='flex flex-wrap gap-[14px]'>
          {ProjectCards}
        </div>
    </section>
  )
}
