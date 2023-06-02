'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="mt-5 flex w-full flex-wrap items-center justify-between border-b border-gray-200 py-4">
      <Link href="/" className="text-xl">
        Laize Ferraz
      </Link>
      <Menu
        className="block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full justify-end font-medium text-black/90 lg:flex lg:w-auto`}
      >
        <ul className="lg:inline-flex">
          <Link
            href="/"
            className="p-2 text-base hover:underline hover:decoration-blue-300/70 hover:decoration-2"
          >
            <li>Home</li>
          </Link>
          <Link
            href="/profile"
            className="p-2 text-base hover:underline hover:decoration-purple-300/70 hover:decoration-2"
          >
            <li>Profile</li>
          </Link>
          <a
            href="/files/ResumeMay23.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-base hover:underline hover:decoration-pink-300/70 hover:decoration-2"
          >
            <li>Resume</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
