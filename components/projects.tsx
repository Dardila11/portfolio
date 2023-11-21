'use client'
import { useActiveSectionContext } from '@/context/active-section-context'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SectionHeading from './section-heading'


export default function Projects() {

  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection])

  return (
    <section
      ref={ref}
      className='scroll-mt-28' id='projects'>
      <SectionHeading> my projects </SectionHeading>
      <div>

        {projectsData.map(project => (

          <section key={project.title} className='group relative bg-gray-100 max-w-[42rem] border border-black/5
            overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8
            hover:bg-gray-200 transition cursor-pointer'
          >

            <div className='flex flex-col h-full group-even:ml-[18rem] pt-4 pb-7 px-5 
              sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]'>
              <h3 className='text-2xl font-semibold'>{project.title}</h3>
              <p className='mt-2 leading-relaxed text-gray-700'>{project.description}</p>
              <ul className='flex flex-wrap mt-2 gap-2 sm:mt-auto'>
                {project.tags.map(tag => (
                  <li key={tag} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider
                 text-white rounded-full'
                  >{tag}</li>
                ))}
              </ul>
            </div>

            <Image src={project.imageUrl} alt={project.title} quality={95}
              className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] 
              group-even:-left-40
               ' />
          </section>
        ))}

      </div>
    </section>
  )
}

