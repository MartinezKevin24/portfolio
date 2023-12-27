import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kev',
  description: 'Home | Kev Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames([inter.className, "flex justify-center items-center"])}>
        <main className='w-full p-2 sm:px-0 sm:w-[640px] md:w-[890px] lg:w-[1044px]'>
          {children}
        </main>
      </body>
    </html>
  )
}
