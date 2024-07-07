import React from 'react'
import type { Metadata } from 'next'
import { PostHome } from './post/components'

export const metadata: Metadata = {
  title: 'Posts - Homepage',
  description: 'This is the posts homepage'
}

const Home = async () => {
  return (
    <div>
      <PostHome />
    </div>
  )
}

export default Home
