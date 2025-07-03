'use client'
import Link from 'next/link'
import { DarkModeToggle } from '@/components/DarkModeToggle'

export const DesktopNavbar = () => {
  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="p-2 text-base hover:underline hover:decoration-blue-300/70 hover:decoration-2 dark:hover:decoration-blue-500"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="p-2 text-base hover:underline hover:decoration-purple-300/70 hover:decoration-2 dark:hover:decoration-purple-500"
        >
          Profile
        </Link>
        <Link
          href="/projects"
          className="p-2 text-base hover:underline hover:decoration-green-300/70 hover:decoration-2 dark:hover:decoration-green-500"
        >
          Work
        </Link>
        <a
          href="/files/Resume-LaizeFerraz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-base hover:underline hover:decoration-pink-300/70 hover:decoration-2 dark:hover:decoration-pink-500">
          Resume
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  )
}