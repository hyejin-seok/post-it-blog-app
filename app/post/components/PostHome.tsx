import { getServerSession } from 'next-auth'
import { options } from '../../api/auth/[...nextauth]/options'
import { LinkButton } from '../../components/Buttons'
import { PostList } from './PostList'

export const PostHome = async () => {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <div className="flex w-full flex-col items-center justify-start">
          <h1 className="mt-10 text-3xl font-semibold tracking-wider">
            All Posts
          </h1>
          <div className="mt-4 flex w-[85%] justify-end">
            <LinkButton href="/post/add" text="Add Post" icon="add" />
          </div>
          <PostList />
        </div>
      ) : (
        <h1 className="mb-[525px] mt-20 text-center text-2xl font-semibold">
          Please sign in to use the blog
        </h1>
      )}
    </>
  )
}
