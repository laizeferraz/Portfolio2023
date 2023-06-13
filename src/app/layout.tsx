import { ReactNode } from 'react'
import './globals.css'
import { Inter, Tenor_Sans as Tenor } from 'next/font/google'
import { Header } from '@/components/Header'
import {Social} from '@/components/Social'

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
    <html lang="en">
      <body
        className={`${inter.variable} ${tenorSans.variable} container mx-auto font-primary `}
      >
        <main className="container mx-auto px-5">
          <Header />
          <Social />
          {children}
        </main>
      </body>
    </html>
  )
}
