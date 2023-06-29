import Image from 'next/image'
import Link from 'next/link'

interface PersonalProjectDetailsProps {
  imageIntroSrc: string
  imageConclusionSrc: string
  title: string
  link: string
  intro: string
  keyFeatures: string[]
  technologies: string[]
  developmentJourney: string[]
  conclusion: string[]
}

export default function PersonalProjectDetails({
  imageIntroSrc,
  imageConclusionSrc,
  title,
  link,
  intro,
  keyFeatures,
  technologies,
  developmentJourney,
  conclusion,
}: PersonalProjectDetailsProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4">
      <Image
        src={imageIntroSrc}
        alt={title}
        width={600}
        height={600}
        className="rounded object-cover"
      />
      <h1 className="my-5">{title}</h1>
      <div className="mb-4 font-bold">
        <Link href={link} className="mb-4 font-bold">
          Click here to see it online
        </Link>
      </div>
      <p className="mb-4">{intro}</p>
      <div>
        <h3 className="mb-5">Key Features</h3>
        <ul>
          {keyFeatures.map((feature) => (
            <div className="mb-2 flex" key={feature}>
              <li>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-5">Technologies</h3>
        <ul>
          {technologies.map((tech) => (
            <div className="mb-2 flex" key={tech}>
              <li>{tech}</li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-5">Development Journey</h3>
        <ul>
          {developmentJourney.map((item) => (
            <div className="mb-2 flex" key={item}>
              <li>{item}</li>
            </div>
          ))}
        </ul>
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
        <ul>
          {conclusion.map((item) => (
            <div className="mb-2 flex" key={item}>
              <li>{item}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
