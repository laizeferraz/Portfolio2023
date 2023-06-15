import Image from 'next/image'
import Link from 'next/link'
import projectList from '../../data/projectList.json'

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      {projectList.map((project) => (
        <div
          className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2"
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
            <p className="mb-4 line-clamp-3">{project.Intro}</p>
            <Link href={`/projects/${project.id}`}>Read more →</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
