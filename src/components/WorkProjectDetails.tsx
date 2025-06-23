import Image from 'next/image'
import { Asterisk } from 'lucide-react'

interface WorkProjectDetailsProps {
  imageIntroSrc: string
  imageConclusionSrc: string
  title: string
  year: string
  role: string
  intro: string
  technologies?: string[]
  challenges?: string[]
  keyFeaturesAndFunctionality: string[]
  frontendDevelopmentAndDesign?: string
  roleAndContributions?: string[]
  backendTechnologiesAndIntegration?: string
  impactAndOutcomes?: string[]
  projectManagementAndCollaboration: string
  conclusion: string
}

export default function WorkProjectDetails({
  imageIntroSrc,
  imageConclusionSrc,
  title,
  year,
  role,
  technologies,
  challenges,
  keyFeaturesAndFunctionality,
  frontendDevelopmentAndDesign,
  roleAndContributions,
  backendTechnologiesAndIntegration,
  impactAndOutcomes,
  projectManagementAndCollaboration,
  conclusion,
  intro,
}: WorkProjectDetailsProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4">
      <Image
        src={imageIntroSrc}
        alt={title}
        width={600}
        height={600}
        className="rounded object-cover"
      />
      <div>
        <h1 className="my-5">{title}</h1>
        <p className="text-sm">
          <span className="font-bold">Role: </span>
          {role}
        </p>
        <p className="text-sm">
          <span className="font-bold">Year: </span>
          {year}
        </p>
      </div>
      <div>
        <p className="mb-4">{intro}</p>
      </div>
      {roleAndContributions && (
        <div>
          <h3 className="mb-5">My Role and Contributions</h3>
          <ul className='list-disc pl-5'>
            {roleAndContributions.map((contribution) => (
              <div className="mb-2 flex" key={contribution}>
                <li>{contribution}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
      { technologies && (
        <div>
          <h3 className="mb-5">Technologies</h3>
          <ul className='list-disc pl-5'>
            {technologies.map((tech) => (
              <div className="mb-2 flex" key={tech}>
                <li>{tech}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
      {challenges && (
        <div>
          <h3 className="mb-5">Challenges</h3>
          <ul className='list-disc pl-5'>
            {challenges.map((challenge) => (
              <div className="mb-2 flex" key={challenge}>
                <li>{challenge}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className="mb-5">Key Features and Functionalities</h3>
        <ul className='list-disc pl-5'>
          {keyFeaturesAndFunctionality.map((feature) => (
            <div className="mb-2 flex" key={feature}>
              <li>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
      { frontendDevelopmentAndDesign && (
        <div>
        <h3 className="mb-5">Frontend Development and Design</h3>
        <p className="whitespace-pre-line">{frontendDevelopmentAndDesign}</p>
      </div>
      )}
      {backendTechnologiesAndIntegration && (
        <div>
          <h3 className="mb-5">Backend Technologies and Integration</h3>
          <p className="whitespace-pre-line">
            {backendTechnologiesAndIntegration}
          </p>
        </div>
      )}
      {impactAndOutcomes && (
        <div className="mb-4">
          <h3 className="mb-5">Impact and Outcomes</h3>
          <ul className='list-disc pl-5'>
            {impactAndOutcomes.map((impact) => (
              <div className="mb-2 flex" key={impact}>
                <li>{impact}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className="mb-5">Project Management and Collaboration</h3>
        <p className="whitespace-pre-line">
          {projectManagementAndCollaboration}
        </p>
      </div>
      <Image
        src={imageConclusionSrc}
        alt={title}
        width={600}
        height={600}
        className="rounded object-cover"
      />
      <div>
        <h3 className="mb-5">Conclusion</h3>
        <p className="whitespace-pre-line">{conclusion}</p>
      </div>
      <div className="flex items-center justify-center">
        <Asterisk height={15} />
        <a href="https://www.vecteezy.com/free-photos" className="text-[10px]">
          Free Stock photos by Vecteezy
        </a>
      </div>
    </div>
  )
}
