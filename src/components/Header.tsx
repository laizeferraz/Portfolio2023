'use client'
import Link from 'next/link'
import { Braces, Menu } from 'lucide-react'
import { useState } from 'react'
import { DesktopNavbar } from '@/components/DesktopNavbar'
import { MobileNavbar } from '@/components/MobileNavbar'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const close = () => setIsMenuOpen(false)
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="mt-5 flex w-full flex-wrap items-start justify-between border-b border-gray-200 py-4 lg:items-center">
      <Link href="/" className="ml-5 flex items-center text-xl">
        Laize
        <Braces color="#E48AEA" />
        Ferraz
      </Link>
      <div className="relative hidden flex-col justify-center sm:flex">
        <DesktopNavbar />
      </div>
      <div className="relative flex flex-row sm:hidden">
        <button
          className="mr-5 block cursor-pointer"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
        <MobileNavbar onClose={close} isOpen={isMenuOpen} />
      </div>
    </header>
  )
}
