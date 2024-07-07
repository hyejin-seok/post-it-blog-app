import React from 'react'
// import prisma from '@/db'
import { redirect } from 'next/navigation'
import { LinkButton, SubmitButton } from '@/app/components/Buttons'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const addPost = async (formData: FormData) => {
  'use server'

  const title = formData.get('title')?.valueOf()
  const content = formData.get('content')?.valueOf()

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error()
  }
  if (typeof content !== 'string' || content.length === 0) {
    throw new Error()
  }

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      saved: false
    }
  })

  redirect('/')
}

const AddPostPage = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 className="text-center text-xl md:text-3xl">Add New Post</h1>
      <form
        action={addPost}
        className="mt-12 flex w-[90%] flex-col gap-2 md:mt-20 md:w-[50%]"
      >
        <span className="inline-flex font-semibold md:text-lg">Title:</span>
        <input
          type="text"
          name="title"
          placeholder="Enter post title"
          required
          className="h-11 rounded-md border-2 border-plt-btn bg-transparent px-2 py-1"
        />
        <span className="inline-flex font-semibold md:text-lg">Content:</span>
        <textarea
          name="content"
          placeholder="Enter content"
          required
          className="min-h-52 rounded-md border-2 border-plt-btn bg-transparent px-2 py-1"
        ></textarea>
        <div className="mt-8 flex items-center justify-center gap-x-4 font-semibold md:text-lg">
          <SubmitButton type="submit" text="Add Post" icon="add" />
          <LinkButton href="/" text="Cancel" icon="cancel" />
        </div>
      </form>
    </div>
  )
}

export default AddPostPage
