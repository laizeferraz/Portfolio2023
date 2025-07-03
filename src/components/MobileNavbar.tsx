'use client'
import Link from 'next/link' 
import { DarkModeToggle } from '@/components/DarkModeToggle'
import { X } from 'lucide-react'

type MobileNavbarProps = {
  isOpen: boolean;
  onClose: () => void;
}
export const MobileNavbar = ({isOpen, onClose}: MobileNavbarProps) => {

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 py-4 lg:hidden">
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed flex flex-col justify-center items-center z-20 top-0 right-0 w-full h-full bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-200 transition-transform duration-300 transform`}
        >
        <button className="absolute right-7 top-4 p-3" onClick={onClose} aria-label="Close menu"><X /></button>
        <ul className="flex flex-col justify-center items-center space-y-4">
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
          <li><DarkModeToggle /></li>
        </ul>
      </div>
    </nav>
  )
}