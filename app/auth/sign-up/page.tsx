import React from 'react'
// import prisma from '@/db'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { MdAccountCircle } from 'react-icons/md'
import { LinkButton, SubmitButton } from '@/app/components/Buttons'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const addUsername = async (formData: FormData) => {
  'use server'

  try {
    const usernameInput = formData.get('username')?.valueOf()
    const passwordInput = formData.get('password')?.valueOf()

    if (typeof usernameInput !== 'string' || usernameInput.length === 0) {
      throw new Error()
    }

    if (typeof passwordInput !== 'string' || passwordInput.length === 0) {
      throw new Error()
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        username: usernameInput
      }
    })

    if (existingUser) {
      throw new Error('Username already exists')
    }

    await prisma.user.create({
      data: {
        username: usernameInput,
        password: passwordInput
      }
    })
    redirect('/')
  } catch (error) {
    throw error
  }
}

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-7 mr-5 flex w-full justify-end md:mr-0 md:w-[450px]">
        <LinkButton href="/" text="back" icon="back" />
      </div>
      <div className="mb-24 w-full rounded-md bg-plt-nav text-plt-post md:w-[450px]">
        {' '}
        <div className="mt-10 flex justify-center">
          <MdAccountCircle className="h-24 w-24" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-semibold tracking-wide">
          Create Your Account
        </h2>
        <p className="mt-1 text-center text-plt-txt">
          Already have an Account?&nbsp;{' '}
          <Link
            href="/auth/sign-in"
            className="font-semibold text-white underline"
          >
            Login
          </Link>
        </p>
        <form action={addUsername} className="mt-8 flex flex-col px-4 md:px-8">
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
          <SubmitButton text="Sign Up" type="submit" classname="mb-12" />
        </form>
      </div>
    </div>
  )
}

export default Signup
