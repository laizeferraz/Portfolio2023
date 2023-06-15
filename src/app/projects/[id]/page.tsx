"use client"
import Image from 'next/image'
import projectList from '../../../../data/projectList.json'
import { usePathname } from 'next/navigation'
import { Asterisk, ChevronsRight } from 'lucide-react'

export default function SingleProject() {
  const currentPath = usePathname()
  const id = currentPath.split('/').pop()
  const selectedProject = projectList.filter((project) => project.id === id)
  return (
    <div className="container max-w-[600px] m-auto px-5">
      {selectedProject.map((project) => (
        <div className="mt-10 grid grid-cols-1 gap-4" key={project.id}>
          <Image
            src={project.ImageIntro}
            alt={project.Title}
            width={600}
            height={600}
            className="rounded object-cover"
          />
          <div>
            <p className="mb-4">{project.Intro}</p>
          </div>
          <div>
            <h3>Key Features and Functionalities</h3>
            <ul>
              {project.KeyFeaturesAndFunctionality.map((feature) => <div className='flex mb-2'><ChevronsRight /><li key={feature}>{feature}</li></div>)}
            </ul>
          </div>
          <div>
            <h3>Frontend Development and Design</h3>
            <p className='whitespace-pre-line'>{project.FrontendDevelopmentAndDesign}</p>
          </div>
          <div>
            <h3>Backend Technologies and Integration</h3>
            <p className='whitespace-pre-line'>{project.BackendTechnologiesAndIntegration}</p>
          </div>
          <div>
            <h3>Project Management and Collaboration</h3>
            <p className='whitespace-pre-line'>{project.ProjectManagementAndCollaboration}</p>
          </div>
          <Image
            src={project.ImageConclusion}
            alt={project.Title}
            width={600}
            height={600}
            className="rounded object-cover"
          />
          <div>
            <h3>Conclusion</h3>
            <p className='whitespace-pre-line'>{project.Conclusion}</p>
          </div>
          <div className='flex items-center justify-center'>
          <Asterisk height={15} />
          <a href="https://www.vecteezy.com/free-photos" className='text-[10px]'>Free Stock photos by Vecteezy</a>
          </div>
          
        </div>

      ))}
    </div>
  )
}

