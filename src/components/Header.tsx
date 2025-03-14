'use client'
import Link from 'next/link'
import { Braces, Menu } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const close = () => setIsMenuOpen(false)

  return (
    <header className="mt-5 flex w-full flex-wrap items-center justify-between border-b border-gray-200 py-4">
      <Link href="/" className="ml-5 flex items-center text-xl">
        Laize
        <Braces />
        Ferraz
      </Link>
      <Menu
        className="mr-5 block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full justify-end font-medium text-black/90 lg:flex lg:w-auto`}
        onClick={close}
      >
        <ul className="mr-3 lg:inline-flex">
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
          <Link
            href="/projects"
            className="p-2 text-base hover:underline hover:decoration-green-300/70 hover:decoration-2"
          >
            <li>Work</li>
          </Link>
          {/* Removed temporarily Find a way to make it work for others pages and scrolling to the section. */}
          {/* <a
            href="#contact"
            className="p-2 text-base hover:underline hover:decoration-gray-300/70 hover:decoration-2"
          >
            <li>Contact</li>
          </a> */}
          <a
            href="/files/Laize-Ferraz-Resume.pdf"
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
