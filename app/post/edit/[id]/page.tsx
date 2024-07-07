import React from 'react'
// import prisma from '@/db'
import { redirect } from 'next/navigation'
import { LinkButton, SubmitButton } from '@/app/components/Buttons'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const editPost = async (formData: FormData) => {
  'use server'

  const id = formData.get('id')?.valueOf()
  const title = formData.get('title')?.valueOf()
  const content = formData.get('content')?.valueOf()

  if (typeof id !== 'string') {
    throw new Error()
  }
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error()
  }
  if (typeof content !== 'string' || content.length === 0) {
    throw new Error()
  }

  await prisma.post.update({
    where: { id },
    data: {
      title: title,
      content: content,
      saved: false
    }
  })

  redirect('/')
}

const page = async ({ params }: { params: { id: string } }) => {
  const postItem = await prisma?.post.findUnique({
    where: { id: params.id }
  })

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[50%] border-blue-500">
        <h1 className="text-center text-xl md:text-3xl">Edit Post Details</h1>
        <form action={editPost} className="mt-12 flex w-full flex-col gap-4">
          <div>
            <span className="inline-flex font-semibold md:text-lg">Title:</span>
            <input
              type="text"
              name="title"
              placeholder="Enter post title"
              className="h-11 w-full rounded border-2 border-plt-btn bg-transparent px-2 py-1"
              defaultValue={postItem?.title}
            />
          </div>
          <div>
            <span className="inline-flex font-semibold md:text-lg">
              Content:
            </span>
            <textarea
              name="content"
              placeholder="Enter content"
              className="min-h-52 w-full rounded border-2 border-plt-btn bg-transparent px-2 py-1 outline-none"
              defaultValue={postItem?.content}
            ></textarea>
          </div>
          <input type="hidden" name="id" value={postItem?.id} />
          <div className="mt-8 flex justify-center gap-6">
            <SubmitButton type="submit" text="Edit Post" icon="edit" />
            <LinkButton href="/" text="Cancel" icon="cancel" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
