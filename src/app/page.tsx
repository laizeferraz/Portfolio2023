'use client'
import { Animation } from '@/components/Animation'
import ProjectsList from '@/components/ProjectsList'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  const encEmail = 'bGFpemVmZXJyYXpAZ21haWwuY29t'
  useEffect(() => {
    const form = document.getElementById('email')
    form?.setAttribute('href', 'mailto:'.concat(atob(encEmail)))
  }, [encEmail])
  return (
    <main className="px-5">
      <div className="mt-12">
        <Animation />
      </div>
      <div className="-mt-[350px] md:-mt-20 lg:-mt-[400px]">
        <div className="mt-10">
          <Link href="/profile">View my profile →</Link>
        </div>
        <h2 className="mt-10">Projects</h2>
        <ProjectsList />
        <div className="mt-5">
          <Link href="/projects">Check my work →</Link>
        </div>
        <div className="mt-10">
          <h2>Get in touch</h2>
          <p id="contact" className="mt-5">
            You can find me at various places around the web, including{' '}
            <a href="https://www.linkedin.com/in/laize-ferraz/">
              <span className="text-blue-800">LinkedIn</span>
            </a>{' '}
            and{' '}
            <a href="https://github.com/laizeferraz">
              <span className="text-indigo-800">Github</span>
            </a>
            , or send me an{' '}
            <a id="email" href="">
              <span className="text-purple-800">Email</span>.
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
