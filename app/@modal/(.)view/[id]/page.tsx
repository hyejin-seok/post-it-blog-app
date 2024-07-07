// import prisma from '@/db'
import { LinkButton } from '@/app/components/Buttons'
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const page = async ({ params }: { params: { id: string } }) => {
  const postItem = await prisma.post.findUnique({ where: { id: params.id } })

  return (
    <div className="fixed left-0 top-0 flex h-full w-screen items-center justify-center bg-black bg-opacity-75">
      <div className="w-full rounded-md bg-plt-nav p-3 md:w-[60%] md:p-5">
        <div className="flex max-h-[60vh] w-full flex-col gap-4 overflow-y-auto rounded-md bg-plt-base px-6 py-4 md:px-10 md:text-lg">
          <div className="flex w-full justify-between text-4xl">
            {postItem?.saved ? (
              <MdBookmark className="text-yellow-700" />
            ) : (
              <MdBookmarkBorder className="text-yellow-500" />
            )}
            <LinkButton
              href=".."
              icon="cancel"
              classname="text-xl md:text-2xl"
            />
          </div>
          <div className="flex flex-col">
            <span className="mr-2 text-lg font-semibold text-plt-nav md:text-xl">
              Title:
            </span>
            <h1 className="">{postItem?.title}</h1>
          </div>
          <div className="flex flex-col">
            <span className="mr-2 text-lg font-semibold text-plt-nav md:text-xl">
              Content:
            </span>
            <p className="">{postItem?.content}</p>
          </div>
          <div className="mb-5">
            <span className="text-lg font-semibold text-plt-nav md:text-xl">
              Status:
            </span>{' '}
            <div className="italic">
              {postItem?.saved ? 'Marked' : 'Not mark'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
