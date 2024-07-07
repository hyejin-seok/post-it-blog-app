import React from 'react'
// import prisma from '@/db'
import { revalidatePath } from 'next/cache'
import { PostListItem } from '.'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const PostList = async () => {
  // await prisma.user.deleteMany()
  // await prisma.post.deleteMany()

  const posts = await prisma?.post.findMany()
  console.log('Data>>>', posts)

  const onDelete = async (id: string) => {
    'use server'
    await prisma.post.delete({ where: { id } })
    revalidatePath('/')
  }

  const onSave = async (id: string, saved: boolean) => {
    'use server'
    await prisma.post.update({
      where: { id },
      data: { saved }
    })
    revalidatePath('/')
  }

  return (
    <div className="mx-4 mb-24 mt-10 grid grid-cols-1 gap-10 md:mx-0 md:mb-36 md:w-[85%] md:grid-cols-2">
      {posts?.map((post) => (
        <PostListItem
          key={post.id}
          {...post}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </div>
  )
}
