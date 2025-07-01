import { ReactNode } from 'react'
import './globals.css'
import { Inter, Tenor_Sans as Tenor } from 'next/font/google'
import { Header } from '@/components/Header'
import { Social } from '@/components/Social'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const tenorSans = Tenor({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
})

export const metadata = {
  title: 'Laize Ferraz',
  description: 'Portfolio of Laize Ferraz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable} ${tenorSans.variable} bg-white font-primary dark:bg-zinc-900 dark:text-zinc-200`}
      >
        <Header />
        <main className="container mx-auto px-5">
          <Social />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
