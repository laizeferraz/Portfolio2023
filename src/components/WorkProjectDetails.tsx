import Image from 'next/image'
import { Asterisk, Maximize } from 'lucide-react'
import Link from 'next/link'

interface WorkProjectDetailsProps {
  imageIntroSrc: string
  imageConclusionSrc?: string
  title: string
  year: string
  role: string
  intro: string
  link?: string
  technologies?: string[]
  challenges?: string[]
  keyFeaturesAndFunctionality: string[]
  frontendDevelopmentAndDesign?: string
  roleAndContributions?: string[]
  backendTechnologiesAndIntegration?: string
  impactAndOutcomes?: string[]
  projectManagementAndCollaboration: string
  conclusion?: string
  video?: string
  noDemo: boolean
}

export default function WorkProjectDetails({
  imageIntroSrc,
  imageConclusionSrc,
  title,
  year,
  role,
  link,
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
  video,
  noDemo = true,
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
        <h2 className="my-5">{title}</h2>
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
      {link && (
        <div className="mb-4 font-bold">
          <Link href={link} className="mb-4 font-bold hover:underline">
            Click here to see it online
          </Link>
        </div>
      )}
      {roleAndContributions && (
        <div>
          <h3 className="mb-5">My Role and Contributions</h3>
          <ul className="list-disc pl-5">
            {roleAndContributions.map((contribution) => (
              <li className="mb-2" key={contribution}>
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      )}
      {technologies && (
        <div>
          <h3 className="mb-5">Technologies</h3>
          <ul className="list-disc pl-5">
            {technologies.map((tech) => (
              <li className="mb-2" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
      {challenges && (
        <div>
          <h3 className="mb-5">Challenges</h3>
          <ul className="list-disc pl-5">
            {challenges.map((challenge) => (
              <li className="mb-2" key={challenge}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className="mb-5">Key Features and Functionalities</h3>
        <ul className="list-disc pl-5">
          {keyFeaturesAndFunctionality.map((feature) => (
            <li className="mb-2" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {frontendDevelopmentAndDesign && (
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
      <div>
        <h3 className="mb-5">Project Management and Collaboration</h3>
        <p className="whitespace-pre-line">
          {projectManagementAndCollaboration}
        </p>
      </div>
      {video && (
        <div className="mb-4">
          <h3 className="mb-5">Video Demonstration</h3>
          <div className="mb-4 flex items-center">
            <Asterisk height={15} />
            <p className="flex items-center text-[10px]">
              Click on the
              <Maximize height={15} />
              to play it in fullscreen mode.
            </p>
          </div>
          <video
            src={video}
            title={title}
            width="100%"
            height="400"
            className="rounded"
            controls
            playsInline
          ></video>
        </div>
      )}
      {imageConclusionSrc && (
        <Image
          src={imageConclusionSrc}
          alt={title}
          width={600}
          height={600}
          className="rounded object-cover"
        />
      )}
      {impactAndOutcomes && (
        <div className="mb-4">
          <h3 className="mb-5">Impact and Outcomes</h3>
          <ul className="list-disc pl-5">
            {impactAndOutcomes.map((impact) => (
              <li className="mb-2" key={impact}>
                {impact}
              </li>
            ))}
          </ul>
        </div>
      )}
      {conclusion && (
        <div>
          <h3 className="mb-5">Conclusion</h3>
          <p className="whitespace-pre-line">{conclusion}</p>
        </div>
      )}
      {noDemo && (
        <div className="flex items-center justify-center">
          <Asterisk height={15} />
          <a
            href="https://www.vecteezy.com/free-photos"
            className="text-[10px]"
          >
            Free Stock photos by Vecteezy
          </a>
        </div>
      )}
    </div>
  )
}
