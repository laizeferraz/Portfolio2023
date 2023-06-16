'use client'
import Image from 'next/image'
import projectList from '../../../../data/projectList.json'
import { usePathname } from 'next/navigation'
import { Asterisk, ChevronsRight } from 'lucide-react'

export default function SingleProject() {
  const currentPath = usePathname()
  const id = currentPath.split('/').pop()
  const selectedProject = projectList.filter((project) => project.id === id)
  return (
    <div className="container m-auto max-w-[600px] px-5">
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
            <h1 className="my-5">{project.Title}</h1>
            <p className="text-sm">
              <span className="font-bold">Role: </span>
              {project.Role}
            </p>
            <p className="text-sm">
              <span className="font-bold">Year: </span>
              {project.Year}
            </p>
          </div>
          <div>
            <p className="mb-4">{project.Intro}</p>
          </div>
          <div>
            <h3 className="mb-5">Key Features and Functionalities</h3>
            <ul>
              {project.KeyFeaturesAndFunctionality.map((feature) => (
                <div className="mb-2 flex" key={feature}>
                  <ChevronsRight />
                  <li>{feature}</li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5">Frontend Development and Design</h3>
            <p className="whitespace-pre-line">
              {project.FrontendDevelopmentAndDesign}
            </p>
          </div>
          <div>
            <h3 className="mb-5">Backend Technologies and Integration</h3>
            <p className="whitespace-pre-line">
              {project.BackendTechnologiesAndIntegration}
            </p>
          </div>
          <div>
            <h3 className="mb-5">Project Management and Collaboration</h3>
            <p className="whitespace-pre-line">
              {project.ProjectManagementAndCollaboration}
            </p>
          </div>
          <Image
            src={project.ImageConclusion}
            alt={project.Title}
            width={600}
            height={600}
            className="rounded object-cover"
          />
          <div>
            <h3 className="mb-5">Conclusion</h3>
            <p className="whitespace-pre-line">{project.Conclusion}</p>
          </div>
          <div className="flex items-center justify-center">
            <Asterisk height={15} />
            <a
              href="https://www.vecteezy.com/free-photos"
              className="text-[10px]"
            >
              Free Stock photos by Vecteezy
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
