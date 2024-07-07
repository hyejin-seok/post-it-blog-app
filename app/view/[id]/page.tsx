import React from 'react'
// import prisma from '@/db'
import { LinkButton } from '@/app/components/Buttons'
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ViewPostpage = async ({ params }: { params: { id: string } }) => {
  const postItem = await prisma.post.findUnique({ where: { id: params.id } })

  return (
    <div className="mb-28 mt-20 flex flex-col items-center justify-center">
      <div className="w-full md:w-[50%]">
        <h1 className="mb-10 text-center text-xl md:text-3xl">Post Details</h1>

        <div className="flex flex-col gap-6 rounded-md bg-plt-base p-5 ring-4 ring-plt-nav ring-offset-8 md:text-lg">
          <div className="flex w-full justify-end text-4xl">
            {postItem?.saved ? (
              <MdBookmark className="text-yellow-700" />
            ) : (
              <MdBookmarkBorder className="text-yellow-500" />
            )}
          </div>
          <div>
            <span className="text-lg font-semibold text-plt-nav md:text-xl">
              Title:
            </span>
            <h1>{postItem?.title}</h1>
          </div>
          <div>
            <span className="text-lg font-semibold text-plt-nav md:text-xl">
              Content:
            </span>
            <p>{postItem?.content}</p>
          </div>
          <div className="flex flex-col text-lg">
            <span className="text-lg font-semibold text-plt-nav md:text-xl">
              Marked:
            </span>
            <div className="italic text-yellow-700">
              {postItem?.saved ? 'Marked' : 'Not Marked'}
            </div>
          </div>
          <div className="my-5 flex items-center justify-center">
            <LinkButton href="/" text="Back" icon="back" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPostpage
