import Image from 'next/image'
import Link from 'next/link'
import projectsList from '../../data/projectsList.json'

export default function ProjectsList() {
  return (
    <div>
      <h4 className="mt-10">Work</h4>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        {projectsList.projects.work.map((project) => (
          <div
            className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2"
            key={project.id}
          >
            <Image
              src={project.ImageIntro}
              alt={project.Title}
              width={400}
              height={400}
              className="rounded object-cover"
            />
            <div>
              <h3>{project.Title}</h3>
              <p className="my-4 line-clamp-3">{project.Intro}</p>
              <Link href={`/projects/${project.id}`}>Read more →</Link>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-10">Personal</h4>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        {projectsList.projects.personal.map((project) => (
          <div
            key={project.id}
            className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2"
          >
            <Image
              src={project.ImageIntro}
              alt={project.Title}
              width={400}
              height={400}
              className="rounded object-cover"
            />
            <div>
              <h3>{project.Title}</h3>
              <p className="my-4 line-clamp-3">{project.Intro}</p>
              <Link href={`/projects/${project.id}`}>Read more →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
