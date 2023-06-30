'use client'
import projectsList from '../../../../data/projectsList.json'
import { usePathname } from 'next/navigation'
import WorkProjectDetails from '@/components/WorkProjectDetails'
import PersonalProjectDetails from '@/components/PersonalProjectDetails'

export default function SingleProject() {
  const currentPath = usePathname()
  const id = currentPath.split('/').pop()
  const selectedWorkProject = projectsList.projects.work.filter(
    (project) => project.id === id,
  )
  const selectedPersonalProject = projectsList.projects.personal.filter(
    (project) => project.id === id,
  )
  return (
    <div className="container m-auto max-w-[600px] px-5">
      {selectedWorkProject.map((project) => (
        <WorkProjectDetails
          key={project.id}
          imageIntroSrc={project.ImageIntro}
          title={project.Title}
          year={project.Year}
          role={project.Role}
          intro={project.Intro}
          keyFeaturesAndFunctionality={project.KeyFeaturesAndFunctionality}
          frontendDevelopmentAndDesign={project.FrontendDevelopmentAndDesign}
          backendTechnologiesAndIntegration={
            project.BackendTechnologiesAndIntegration
          }
          projectManagementAndCollaboration={
            project.ProjectManagementAndCollaboration
          }
          imageConclusionSrc={project.ImageConclusion}
          conclusion={project.Conclusion}
        />
      ))}
      {selectedPersonalProject.map((project) => (
        <PersonalProjectDetails
          key={project.id}
          title={project.Title}
          link={project.Link}
          intro={project.Intro}
          keyFeatures={project.KeyFeatures}
          technologies={project.Technologies}
          developmentJourney={project.DevelopmentJourney}
          conclusion={project.Conclusion}
          imageConclusionSrc={project.ImageConclusion}
          imageIntroSrc={project.ImageIntro}
        />
      ))}
    </div>
  )
}
