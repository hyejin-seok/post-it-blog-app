'use client'

export const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center bg-plt-nav p-5 text-center text-sm text-plt-post md:text-base">
      <p>&copy; {new Date().getFullYear()} Hyejin Seok.</p>
      <p>&nbsp;All rights reserved.</p>
    </footer>
  )
}
