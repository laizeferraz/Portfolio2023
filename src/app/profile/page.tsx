import Image from 'next/image'
import ProfilePic from '../../../public/images/GHProfilePic.jpeg'
import Link from 'next/link'

const experience: {
  company: string
  role: string
  date: string
  website: string
}[] = [
    {
      company: 'Xestro',
      role: 'Software Engineer',
      date: '2025 - 2026',
      website: 'https://xestro.com/',
    },
    {
      company: 'Grok Academy',
      role: 'Software Engineer',
      date: '2023 - 2024',
      website: 'https://groklearning.com/',
    },
    {
      company: 'Palo IT',
      role: 'Software Engineer',
      date: '2021 - 2023',
      website: 'https://www.palo-it.com/en-au/',
    },
    {
      company: 'Academy Xi',
      role: 'Frontend Developer Mentor',
      date: '2022 - 2022',
      website: 'https://academyxi.com/',
    },
    {
      company: 'Generation Australia',
      role: 'Frontend Developer Instructor',
      date: '2020 - 2021',
      website: 'https://australia.generation.org/',
    },
  ]

const skills: string[] = [
  'TypeScript',
  'JavaScript',
  'Testing',
  'Accessibility',
  'React',
  'Agile/Scrum',
  'Storybook',
  'Tailwind CSS',
  'Next.js',
  'Figma',
  'Styled Components',
  'Web Components',
]

export default function Profile() {
  return (
    <div className="px-5">
      <Image
        className="mt-10 rounded-full shadow-lg shadow-purple-300 hover:shadow-pink-300 dark:shadow-purple-800 dark:hover:shadow-pink-800"
        src={ProfilePic}
        width={100}
        alt="My profile picture"
      />
      <section className="mt-10 pb-20">
        <h2 className="text-4xl font-medium tracking-tighter text-black dark:text-zinc-200">
          Profile
        </h2>
      </section>

      <section className="border-b border-gray-200 pb-10">
        <div>
          <h2 className="mb-4 text-2xl font-medium text-black dark:text-zinc-200">
            How I got here
          </h2>
          <article className="dark:text-zinc-200">
            My curiosity for technology started when I got my hands on a 486 computer at 15. With no computer classes available nearby, I started figuring things out on my own — and even took a course in computer hardware because I wanted to understand what was happening behind the screen.
            <p className="py-3">
              My career didn't start in tech, though. I studied Law and worked as a lawyer in Brazil before moving to Australia, where I had the opportunity to rethink what I wanted from my career. That curiosity, which I'd had since I was a teenager, eventually led me back to technology, this time as a software engineer.{' '}
            </p>
            <p className="py-3">
              Today, I'm a <span className="font-bold">Frontend Software Engineer specialising in React, TypeScript, and JavaScript</span>, and I enjoy building products that are intuitive, accessible, and genuinely useful to the people who use them.
            </p>
            <p className="py-3">
              {' '}
              Along the way, I've worked across SaaS, consulting, and education technology, building everything from reusable component libraries to interactive learning experiences. I've also taught and mentored aspiring developers — an experience that strengthened my interest in using technology to make complex things easier to understand and more accessible.
            </p>{' '}
            <p className="py-3">
              What I enjoy most about frontend engineering is that it sits at the intersection of people, design, and technology. For me, good software isn't just about writing clean code; it's about understanding who you're building for, solving the right problem, and creating an experience that feels simple on the other side.
            </p>
            <p className="py-3">
              I'm still driven by the same curiosity that made me take apart computers years ago — only now, I get to use it to build things for others.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-gray-200 py-10">
        <h2 className="mb-4 text-2xl font-medium text-black dark:text-zinc-200">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12">
          {experience.map((exp, index) => {
            const colSpan = index === 3 ? "md:col-start-3" : ""
            return (
              <div key={exp.company} className={`${colSpan} transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-sm bg-white/90 p-5 shadow-lg shadow-gray-300 dark:bg-black/800 dark:shadow-black m-2 md:col-span-4`}>
                <h4 className="mt-5">
                  <p className="text-lg font-medium text-black/90 dark:text-zinc-200">
                    {exp.company}
                  </p>
                  <p className="text-black/50 dark:text-zinc-500">{exp.role}</p>
                </h4>
                <p className="text-black/40 dark:text-zinc-500">{exp.date}</p>
                <Link
                  href={exp.website}
                  className="text-black/40 hover:text-black/70 dark:text-zinc-500 dark:hover:text-zinc-300 break-all"
                >
                  {exp.website}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-b border-gray-200 py-10">
        <h2 className="mb-4 text-2xl font-medium text-black dark:text-zinc-200">
          Skills & technologies
        </h2>
        <div>
          <ul className="grid grid-cols-1 space-y-2 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => {
              return (
                <li
                  key={skill}
                  className="text-md font-normal text-black/70 dark:text-zinc-400"
                >
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <div className="py-10">
        <a
          className="animate-pulse text-zinc-950 hover:underline dark:text-zinc-200"
          href="/files/LaizeFerraz-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume →
        </a>
      </div>
    </div>
  )
}
