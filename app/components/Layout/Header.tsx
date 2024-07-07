'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <nav className="sticky top-0 z-10 bg-plt-nav py-1 shadow-md">
      <div className="prose prose-xl h-18 mx-auto flex items-center justify-center">
        <Logo />
        <h1 className="sofia grid place-content-center p-3 text-xl font-semibold tracking-wider text-plt-post md:text-3xl">
          <Link href="/" className="no-underline">
            Post It Blog
          </Link>
        </h1>
      </div>
    </nav>
  )
}
