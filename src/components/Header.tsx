'use client'
import Link from 'next/link'
import { Braces, Menu } from 'lucide-react'
import { useState } from 'react'
import { DarkModeToggle } from '@/components/DarkModeToggle'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const toggleMenu = ( )=> {
  //   console.log('Menu toggled')
  //   setIsMenuOpen(!isMenuOpen)
  // }
  const close = () => setIsMenuOpen(false)

  return (
    <header className="mt-5 flex w-full flex-wrap items-start justify-between border-b border-gray-200 py-4 lg:items-center">
      <Link href="/" className="ml-5 flex items-center text-xl">
        Laize
        <Braces color="#E48AEA" />
        Ferraz
      </Link>
      <div className="flex flex-col items-end lg:flex-row lg:items-center">
        <button
          className="mr-5 block cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
        <nav
          className={`${
            isMenuOpen ? 'starting:open:opacity-0 block opacity-100' : 'hidden'
          } transition-discrete flex w-full justify-end font-medium text-black/90 transition-all dark:text-zinc-200 lg:flex lg:w-auto`}
          onClick={close}
        >
          <ul className="mr-3 flex flex-col items-end gap-2 dark:text-zinc-200 lg:flex-row lg:items-center lg:space-x-4">
            <li>
              <Link
                href="/"
                className="p-2 text-base hover:underline hover:decoration-blue-300/70 hover:decoration-2 dark:hover:decoration-blue-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className="p-2 text-base hover:underline hover:decoration-purple-300/70 hover:decoration-2 dark:hover:decoration-purple-500"
              >
                Profile
              </Link>
            </li>

            <li>
              {' '}
              <Link
                href="/projects"
                className="p-2 text-base hover:underline hover:decoration-green-300/70 hover:decoration-2 dark:hover:decoration-green-500"
              >
                Work
              </Link>
            </li>

            {/* Removed temporarily Find a way to make it work for others pages and scrolling to the section. */}
            {/* <a
            href="#contact"
            className="p-2 text-base hover:underline hover:decoration-gray-300/70 hover:decoration-2"
          >
            <li>Contact</li>
          </a> */}

            <li>
              <a
                href="/files/Resume-LaizeFerraz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-base hover:underline hover:decoration-pink-300/70 hover:decoration-2 dark:hover:decoration-pink-500"
              >
                Resume
              </a>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
