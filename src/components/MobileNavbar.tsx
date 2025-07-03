'use client'
import Link from 'next/link'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import { X } from 'lucide-react'

type MobileNavbarProps = {
  isOpen: boolean
  onClose: () => void
}
export const MobileNavbar = ({ isOpen, onClose }: MobileNavbarProps) => {
  return (
    <nav
      id="mobile-menu"
      className="flex w-full items-center justify-between border-b border-gray-200 py-4 lg:hidden"
    >
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 z-20 flex h-full w-full transform flex-col items-center justify-center bg-white text-zinc-950 transition-transform duration-300 dark:bg-zinc-900 dark:text-zinc-200`}
      >
        <button
          className="absolute top-4 right-7 p-3"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X />
        </button>
        <ul className="flex flex-col items-center justify-center space-y-4">
          <li>
            <Link href="/" onClick={onClose} className="p-2 text-base">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" onClick={onClose} className="p-2 text-base">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={onClose} className="p-2 text-base">
              Work
            </Link>
          </li>
          <li>
            <a
              href="/files/Resume-LaizeFerraz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-base"
            >
              Resume
            </a>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
