import { Animation } from '@/components/Animation'
import ProjectsList from '@/components/ProjectsList'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="mt-12">
        <Animation />
        <div className="-mt-[350px] md:-mt-20 lg:-mt-[400px]">
          <Link href="/profile">View my profile →</Link>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="">Projects</h2>
        <ProjectsList />
      </div>
    </>
  )
}
