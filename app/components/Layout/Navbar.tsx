'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  FiFileText,
  FiImage,
  FiMail,
  FiLogIn,
  FiLogOut,
  FiUserPlus
} from 'react-icons/fi'

type NavbarProps = {
  isLoggedIn: boolean
}

export const Navbar = ({ isLoggedIn }: NavbarProps) => {
  const router = useRouter()

  const logoutHandler = () => {
    signOut()
    router.push('/')
  }
  return (
    <div className="flex w-full items-center justify-center bg-plt-post text-plt-txt drop-shadow-md">
      <menu className="my-4 flex w-[98%] flex-col sm:flex-row md:w-[85%] md:text-xl">
        <div className="flex gap-6">
          <li>
            <Link
              href="/"
              className="flex items-center justify-center no-underline hover:opacity-70"
            >
              <FiFileText className="mr-1 h-6 w-6" />
              Post
            </Link>
          </li>
          <li>
            <Link
              href="/image"
              className="flex items-center justify-center no-underline hover:opacity-70"
            >
              <FiImage className="mr-1 h-6 w-6" />
              Image
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center justify-center no-underline hover:opacity-70"
            >
              <FiMail className="mr-1 h-6 w-6" />
              Contact
            </Link>
          </li>
        </div>
        {isLoggedIn ? (
          <li className="ml-auto">
            <button
              className="flex no-underline hover:opacity-70"
              onClick={logoutHandler}
            >
              <FiLogOut className="mr-1 h-6 w-6" />
              Sign Out
            </button>
          </li>
        ) : (
          <div className="ml-auto mt-3 flex gap-6 sm:mt-0">
            <li>
              <Link
                href="/auth/sign-in"
                className="flex items-center justify-center no-underline hover:opacity-70"
              >
                <FiLogIn className="mr-1 h-6 w-6" />
                Log In
              </Link>
            </li>

            <li>
              <Link
                href="/auth/sign-up"
                className="flex no-underline hover:opacity-70"
              >
                <FiUserPlus className="mr-1 h-6 w-6" />
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </menu>
    </div>
  )
}
