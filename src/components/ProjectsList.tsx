import Image from 'next/image'
import Link from 'next/link'
import projectsList from '../../data/projectsList.json'

export default function ProjectsList() {
  return (
    <div>
      <h2 className="mt-10 text-xl">Work</h2>
      <div className="md:gap-7 lg:flex lg:flex-wrap">
        {projectsList.projects.work.map((project) => (
          <div
            key={project.id}
            className="mt-5 rounded-sm bg-slate-100 p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 md:max-w-xl lg:max-w-2xl dark:bg-zinc-800"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <Link href={`/projects/${project.id}`} className="shrink-0">
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
                  className="text-zinc-950 hover:animate-pulse hover:underline dark:text-white"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-xl">Personal</h2>
      <div className="md:gap-7 lg:flex-row xl:flex">
        {projectsList.projects.personal.map((project) => (
          <div
            key={project.id}
            className="mt-5 rounded-sm bg-slate-100 p-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 md:max-w-xl lg:max-w-2xl dark:bg-zinc-800"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <Link href={`/projects/${project.id}`} className="shrink-0">
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
                  className="text-zinc-950 hover:animate-pulse hover:underline dark:text-white"
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
