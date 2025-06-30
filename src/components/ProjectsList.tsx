import Image from 'next/image'
import Link from 'next/link'
import projectsList from '../../data/projectsList.json'

export default function ProjectsList() {
  return (
    <div>
      <h2 className="mt-10 text-xl">Work</h2>
      <div className="md:gap-3 lg:flex lg:flex-wrap ">
        {projectsList.projects.work.map((project) => (
          <div
            key={project.id}
            className="hover:scale-80 mt-5 flex flex-col rounded bg-slate-100 p-4 transition duration-300 ease-in-out hover:-translate-y-1 md:max-w-xl lg:max-w-2xl lg:flex-row"
          >
            <div className="flex flex-row gap-4">
              <Link href={`/projects/${project.id}`} className="flex-shrink-0">
                <Image
                  src={project.ImageIntro}
                  alt={project.Title}
                  width={400}
                  height={400}
                  className="rounded object-cover"
                />
              </Link>
              <div className="flex flex-col justify-start">
                <h3>
                  <Link
                    href={`/projects/${project.id}`}
                    className="hover:underline"
                  >
                    {project.Title}
                  </Link>
                </h3>
                <p className="my-4 line-clamp-3">{project.Intro}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="animate-pulse text-zinc-950 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-xl">Personal</h2>
      <div className="md:gap-4 lg:flex-row xl:flex">
        {projectsList.projects.personal.map((project) => (
          <div
            key={project.id}
            className="hover:scale-80 mt-5 flex flex-col gap-4 rounded bg-slate-100 p-4 transition duration-300 ease-in-out hover:-translate-y-1 md:max-w-xl lg:max-w-2xl lg:flex-row"
          >
            <div className="flex flex-row gap-4">
              <Link href={`/projects/${project.id}`} className="flex-shrink-0">
                <Image
                  src={project.ImageIntro}
                  alt={project.Title}
                  width={400}
                  height={400}
                  className="rounded object-cover"
                />
              </Link>
              <div className="flex flex-col justify-start">
                <h3>
                  <Link
                    href={`/projects/${project.id}`}
                    className="hover:underline"
                  >
                    {project.Title}
                  </Link>
                </h3>
                <p className="my-4 line-clamp-3">{project.Intro}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="animate-pulse text-zinc-950 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
