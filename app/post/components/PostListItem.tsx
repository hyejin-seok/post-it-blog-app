'use client'

import React from 'react'
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { LinkButton, SubmitButton } from '../../components/Buttons'

type PostItemProps = {
  id: string
  title: string
  content: string
  saved: boolean
  onDelete: (id: string) => void
  onSave: (id: string, saved: boolean) => void
}

export const PostListItem = ({
  id,
  title,
  content,
  saved,
  onDelete,
  onSave
}: PostItemProps) => {
  return (
    <div className="rounded-md bg-plt-nav p-2 shadow-md ring ring-plt-nav ring-offset-2 md:p-5">
      <div className="flex min-h-[160px] flex-col rounded-md bg-plt-post px-5 pb-5 pt-2 shadow-md">
        <div className="flex w-full justify-end text-3xl">
          {saved ? (
            <MdBookmark className="text-yellow-700" />
          ) : (
            <MdBookmarkBorder className="text-yellow-500" />
          )}
        </div>
        <h3 className="text-xl font-bold"> &lt;Title: {title}&gt;</h3>
        <p className="mt-4 line-clamp-2 overflow-y-scroll whitespace-pre-line text-lg">
          Content: {content}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-base font-medium md:gap-6 md:text-lg">
        <SubmitButton
          type="button"
          text={saved ? 'Unmark' : 'Mark'}
          icon={saved ? 'marked' : 'mark'}
          onClick={() => onSave(id, !saved)}
        />
        <LinkButton href={`/view/${id}`} icon="view" text="View" />
        <LinkButton href={`/post/edit/${id}`} icon="edit" text="Edit" />
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
