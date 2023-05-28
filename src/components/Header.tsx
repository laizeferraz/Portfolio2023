import Link from 'next/link'

export const Header = () => {
  return (
    <header className="mt-5 flex w-full justify-between border-b border-gray-200 py-4">
      <Link href="/" className="text-xl">
        Laize Ferraz
      </Link>
      <nav className="text-md flex gap-4 font-medium text-black/90">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <a
          href="/files/ResumeMay23.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
