'use server'

// import prisma from '@/db'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const addImageServer = async (title: string, imageurl: string) => {
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error()
  }
  if (typeof imageurl !== 'string' || imageurl.length === 0) {
    throw new Error()
  }

  await prisma.image.create({
    data: {
      title: title,
      imageurl: imageurl,
      saved: false
    }
  })

  redirect('/')
}
