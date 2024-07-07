import React from 'react'
// import prisma from '@/db'
import { revalidatePath } from 'next/cache'
import { ImageListItem } from '.'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const ImageList = async () => {
  const images = await prisma?.image.findMany()

  const onDelete = async (id: string) => {
    'use server'
    await prisma.image.delete({ where: { id } })
    revalidatePath('/')
  }

  const onSave = async (id: string, saved: boolean) => {
    'use server'
    await prisma.image.update({
      where: { id },
      data: { saved }
    })
    revalidatePath('/')
  }

  return (
    <div className="mb-32 mt-16 grid w-[80%] grid-cols-1 gap-16 md:grid-cols-2">
      {images?.map((image) => (
        <ImageListItem
          key={image.id}
          {...image}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </div>
  )
}
