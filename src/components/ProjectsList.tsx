import Image from 'next/image'
import Link from 'next/link'
import projectsList from '../../data/projectsList.json'

export default function ProjectsList() {
  return (
    <div>
      <h4 className="mt-10">Work</h4>
      <div className="md:gap-4 xl:flex xl:flex-row">
        {projectsList.projects.work.map((project) => (
          <div
            className="mt-5 flex flex-col gap-4 md:max-w-xl lg:max-w-2xl lg:flex-row"
            key={project.id}
          >
            <Image
              src={project.ImageIntro}
              alt={project.Title}
              width={400}
              height={400}
              className="rounded object-cover"
            />
            <div className="flex flex-col justify-start">
              <h3>{project.Title}</h3>
              <p className="my-4 line-clamp-3">{project.Intro}</p>
              <Link
                className="animate-pulse text-zinc-950"
                href={`/projects/${project.id}`}
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-10">Personal</h4>
      <div className="md:gap-4 lg:flex-row xl:flex">
        {projectsList.projects.personal.map((project) => (
          <div
            key={project.id}
            className="mt-5 flex flex-col gap-4 md:max-w-xl lg:max-w-2xl lg:flex-row"
          >
            <Image
              src={project.ImageIntro}
              alt={project.Title}
              width={400}
              height={400}
              className="rounded object-cover"
            />
            <div className="flex flex-col justify-start">
              <h3>{project.Title}</h3>
              <p className="my-4 line-clamp-3">{project.Intro}</p>
              <Link
                className="animate-pulse text-zinc-950"
                href={`/projects/${project.id}`}
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
