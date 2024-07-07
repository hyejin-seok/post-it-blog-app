'use client'

import React from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { CgHello } from 'react-icons/cg'
import { useRouter } from 'next/navigation'
import { LinkButton, SubmitButton } from '@/app/components/Buttons'

const Login = () => {
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const usernameInput = formData.get('username')?.toString()
    const passwordInput = formData.get('password')?.toString()

    if (!usernameInput) {
      alert('Username is required')
      return
    }

    await signIn('credentials', {
      username: usernameInput,
      password: passwordInput,
      redirect: false
    }).then((callback) => {
      if (callback?.ok) {
        router.push('/')
        router.refresh()
      }

      if (callback?.error) {
        console.error('>>> Invalid username or password')
      }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-7 mr-5 flex w-full justify-end md:mr-0 md:w-[450px]">
        <LinkButton href="/" text="back" icon="back" />
      </div>
      <div className="mb-24 w-full rounded-md bg-plt-nav text-plt-post md:w-[450px]">
        <div className="mt-10 flex justify-center">
          <CgHello className="h-24 w-24" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-semibold tracking-wide">
          Welcome Back!
        </h2>
        <p className="mt-1 text-center text-plt-txt">
          Don&apos;t have account yet?&nbsp;{' '}
          <Link
            href="/auth/sign-up"
            className="font-semibold text-white underline"
          >
            {' '}
            Sign Up
          </Link>
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col px-4 md:px-8"
        >
          <label htmlFor="username" className="mb-1 text-lg font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            className="mb-3 h-12 w-full rounded p-2 text-black"
          />
          <label htmlFor="password" className="mb-1 text-lg font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="mb-10 h-12 w-full rounded p-2 text-black"
          />
          <SubmitButton text="Sign In" type="submit" classname="mb-12" />
        </form>
      </div>
    </div>
  )
}

export default Login
