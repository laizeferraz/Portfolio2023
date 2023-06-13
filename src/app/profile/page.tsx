import Image from 'next/image'
import ProfilePic from '../../../public/images/GHProfilePic.jpeg'

const experience: {
  company: string
  role: string
  date: string
}[] = [
  {
    company: 'Palo IT',
    role: 'Software Engineer',
    date: '2021 - 2023',
  },
  {
    company: 'Academy Xi',
    role: 'Frontend Developer Mentor',
    date: '2022 - 2022',
  },
  {
    company: 'Generation Australia',
    role: 'Frontend Developer Instructor',
    date: '2020 - 2021',
  },
]

const skills: string[] = [
  'JavaScript',
  'HTML / CSS',
  'React',
  'Bootstrap',
  'Tailwind CSS',
  'Styled Components',
  'Storybook',
  'Next.js',
  'Figma',
]

export default function Profile() {
  return (
    <main className='px-5'>
      <Image
        className="rounded-full shadow-lg shadow-purple-300 hover:shadow-pink-300 mt-10"
        src={ProfilePic}
        width={100}
        alt="My profile picture"
      />
      <section className="mt-10 pb-20">
        <h1 className="text-4xl font-medium tracking-tighter text-black">
          Profile
        </h1>
      </section>

      <section className="border-b border-gray-200 pb-10">
        <div>
          <h2 className="mb-4 text-2xl font-medium text-black">
            How I got here
          </h2>
          <article>
            Hey there! My name is Laize, and let me take you on a journey
            through my tech-infused life.
            <p className="py-3">
              Ever since I laid my hands on a 486 computer at the age of 13, I
              have been captivated by the world of technology. With no
              accessible classes nearby, I taught myself the ins and outs of
              using software computing. Out of curiosity, I took a course in
              assembling a CPU to see the magic behind a hardware that allows us
              to create and use fantastic software solutions.{' '}
            </p>
            <p className="py-3">
              However, societal norms led me to pursue a career in Law, which
              allowed me to empower individuals and secure a stable future. But
              life took an unexpected turn when I left Brazil and found myself
              in Sydney, Australia, which became the perfect opportunity to
              reassess my career choices. That&apos;s when I boldly decided to
              dive headfirst into programming.
            </p>
            <p className="py-3">
              {' '}
              In 2019, I completed Certification IV in Web-Based Technologies
              from TAFE, and since then, I&apos;ve never looked back. Frontend
              development has become my true passion, merging my love for
              technology with my desire to make a difference in people&apos;s
              lives.
            </p>{' '}
            <p className="py-3">
              Join me as I embark on this exciting journey, crafting captivating
              digital experiences and pushing the boundaries of creativity, one
              line of code at a time.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-gray-200 py-10">
        <div className="">
          <h2 className="mb-4 text-2xl font-medium text-black">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {experience.map((exp) => {
              return (
                <div key={exp.company}>
                  <h4 className="mt-5">
                    <p className="text-lg font-medium text-black/90">
                      {exp.company}
                    </p>
                    <p className="text-black/50">{exp.role}</p>
                  </h4>
                  <p className="text-black/40">{exp.date}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 py-10">
        <div className="">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Skills & technologies
          </h2>
          <div>
            <ul className="grid grid-cols-1 space-y-2 md:grid-cols-3">
              {skills.map((skill) => {
                return (
                  <li key={skill} className="text-md font-normal text-black/70">
                    {skill}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
      <div className="py-10">
        <a
          href="/files/ResumeMay23.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume →
        </a>
      </div>
    </main>
  )
}
