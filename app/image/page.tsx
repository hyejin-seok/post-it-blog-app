import React from 'react'
import { LinkButton } from '../components/Buttons'
import { ImageList } from './components'

const ImagePage = async () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-[80%] flex-col">
        <div className="mt-12 flex justify-end gap-5">
          <LinkButton href="/image/add" icon="add" text="Add Image" />
        </div>
        <h1 className="mt-5 text-center text-3xl tracking-wider">All Images</h1>
      </div>
      <ImageList />
    </div>
  )
}

export default ImagePage
