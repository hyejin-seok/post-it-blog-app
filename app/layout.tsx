import type { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'
import './globals.css'
import AuthProvider from './context/AuthProvider'
import { Footer, Header, Navbar } from './components/Layout'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'

export const metadata: Metadata = {
  title: 'NextJS PostIt Blog App',
  description: 'CRUD Posts and Images are possible',
  icons: {
    icon: '/favicon.ico'
  }
}

const sofia_init = Sofia_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sofia'
})

export default async function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const session = await getServerSession(options)
  const isLoggedIn: boolean = session ? true : false

  return (
    <html lang="en">
      <body
        className={`${sofia_init.variable} bg-plt-base font-sofia tracking-wide text-plt-txt`}
      >
        <Header />
        <Navbar isLoggedIn={isLoggedIn} />
        <AuthProvider>
          <main className="min-h-[calc(100vh-190px)]">{children}</main>
          {modal}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  )
}
