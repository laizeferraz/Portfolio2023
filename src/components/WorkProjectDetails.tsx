import Image from 'next/image'
import { Asterisk, ChevronsRight } from 'lucide-react'

interface WorkProjectDetailsProps {
  imageIntroSrc: string
  imageConclusionSrc: string
  title: string
  year: string
  role: string
  intro: string
  keyFeaturesAndFunctionality: string[]
  frontendDevelopmentAndDesign: string
  backendTechnologiesAndIntegration: string
  projectManagementAndCollaboration: string
  conclusion: string
}

export default function WorkProjectDetails({
  imageIntroSrc,
  imageConclusionSrc,
  title,
  year,
  role,
  keyFeaturesAndFunctionality,
  frontendDevelopmentAndDesign,
  backendTechnologiesAndIntegration,
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
      <div>
        <h3 className="mb-5">Key Features and Functionalities</h3>
        <ul>
          {keyFeaturesAndFunctionality.map((feature) => (
            <div className="mb-2 flex" key={feature}>
              <ChevronsRight />
              <li>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-5">Frontend Development and Design</h3>
        <p className="whitespace-pre-line">{frontendDevelopmentAndDesign}</p>
      </div>
      <div>
        <h3 className="mb-5">Backend Technologies and Integration</h3>
        <p className="whitespace-pre-line">
          {backendTechnologiesAndIntegration}
        </p>
      </div>
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
