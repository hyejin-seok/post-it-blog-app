'use client'

import React from 'react'
import Image from 'next/image'
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { SubmitButton } from '@/app/components/Buttons'

type ImageItemProps = {
  id: string
  title: string
  imageurl: string
  saved: boolean
  onDelete: (id: string) => void
  onSave: (id: string, saved: boolean) => void
}

export const ImageListItem = ({
  id,
  title,
  imageurl,
  saved,
  onDelete,
  onSave
}: ImageItemProps) => {
  return (
    <div className="rounded-lg bg-plt-post pb-4 shadow-md ring-4 ring-plt-nav ring-offset-8 ring-offset-plt-base">
      <div className="flex flex-col items-center justify-center gap-1 lg:p-5">
        <div className="flex w-full justify-end text-3xl">
          {saved ? (
            <MdBookmark className="text-yellow-700" />
          ) : (
            <MdBookmarkBorder className="text-yellow-500" />
          )}
        </div>
        <h3 className="text:lg mb-2 text-center font-semibold md:text-2xl">
          &lt; Title: {title} &gt;
        </h3>
        <Image
          src={imageurl}
          alt={title}
          width={500}
          height={500}
          className="rounded-md shadow-md"
        />
        <span className="my-2 flex md:text-lg">
          Image URL:
          <a className="ml-2 underline" href={imageurl} target="_blank">
            Link
          </a>
        </span>
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
        <SubmitButton
          type="button"
          text={saved ? 'Unmark' : 'Mark'}
          icon={saved ? 'marked' : 'mark'}
          onClick={() => onSave(id, !saved)}
        />

        <SubmitButton
          type="button"
          text="Delete"
          icon="delete"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  )
}
