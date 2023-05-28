import { Animation } from '@/components/Animation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mt-10">
      <Animation />
      <p className="mt-20 p-5">
        👋 Hey I&apos;m Laize, a design-focused engineer based in Sydney.
        I&apos;m currently looking for a new oppportunity to build the
        next-generation of web based banking tools.
      </p>

      <Link href="/profile" className="mt-8">
        View my profile →
      </Link>
    </div>
  )
}
