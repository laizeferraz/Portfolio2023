import { Animation } from '@/components/Animation'
import ProjectsList from '@/components/ProjectsList'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='px-5'>
      <div className="mt-12">
        <Animation />
      </div>
      <div className="-mt-[350px] md:-mt-20 lg:-mt-[400px]">
        <div className='mt-10'>
          <Link href="/profile">View my profile →</Link>
        </div>
        <h2 className="mt-10">Projects</h2>
        <ProjectsList />
        <div className="mt-5">
          <Link href="/projects">Check my work →</Link>
        </div>
      </div>
    </main>
  )
}
