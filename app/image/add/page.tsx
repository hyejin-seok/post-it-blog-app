'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LinkButton, SubmitButton } from '@/app/components/Buttons'
import { addImageServer } from '@/app/server'
import { PiSpinnerGapBold } from 'react-icons/pi'
import { FiUploadCloud, FiFilePlus } from 'react-icons/fi'

const AddImagePage = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader()

    file.onload = function () {
      setPreview(file.result)
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop
    })

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    if (typeof acceptedFiles[0] === 'undefined') return

    const formData = new FormData()
    const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || ''

    if (!CLOUDINARY_API_KEY) {
      console.error('CLOUDINARY_API_KEY is not defined')
      return
    }

    formData.append('file', acceptedFiles[0])
    formData.append('upload_preset', 'nextjs-final')
    formData.append('api_key', CLOUDINARY_API_KEY)

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/jendemo/image/upload',
        {
          method: 'POST',
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()

      setPreview(data.secure_url)
      setLoading(false)
      // console.log('data results', data)

      if (title && data.secure_url) {
        await addImageServer(title, data.secure_url)
      }

      router.push('/image')
    } catch (error) {
      console.error('Error uploading image:', error)
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] pt-12 md:w-[50%]">
        <div className="flex justify-end">
          <LinkButton href="/image" icon="back" text="Back" />
        </div>
        <h1 className="text-center text-xl md:text-3xl">Uploading Images</h1>

        <form
          className="mb-24 mt-8 flex w-full flex-col"
          method="post"
          onSubmit={handleOnSubmit}
        >
          <div>
            <label htmlFor="title" className="font-semibold md:text-lg">
              Title:
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Image title"
              className="mt-2 h-12 w-full rounded border-2 border-plt-nav bg-transparent px-2 py-1"
            />
          </div>

          <div className="mt-8">
            <label htmlFor="image" className="font-semibold md:text-lg">
              Image:
            </label>
            {!preview && (
              <div
                {...getRootProps()}
                className="mt-4 flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-4 border-dashed border-plt-nav bg-transparent"
                role="button"
                aria-label="Upload image"
                tabIndex={0}
              >
                <input {...getInputProps()} required />
                {isDragActive ? (
                  <div className="flex flex-col items-center font-semibold md:text-lg">
                    <FiUploadCloud className="text-5xl" />
                    <span> Drop the files here</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1 font-semibold md:text-lg">
                    <FiUploadCloud className="text-5xl md:text-7xl" />
                    <span>Drag & Drop to upload an image here</span>
                    <span>or</span>
                    <div className="flex items-center rounded-md bg-plt-nav px-10 py-3 text-plt-hv md:px-20">
                      <FiFilePlus className="mr-1 text-lg md:text-2xl" />
                      Browse Files
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {loading && (
            <div className="fixed left-0 top-0 flex h-full w-screen items-center justify-center bg-black bg-opacity-70 p-5 text-plt-hv">
              <div className="mr-3 animate-spin text-5xl">
                <PiSpinnerGapBold />
              </div>
              <p className="text-2xl">Uploading...</p>
            </div>
          )}

          {preview && (
            <div className="justfiy-center mt-5 flex flex-col items-center">
              <Image
                src={preview as string}
                alt="Uploaded image preview"
                className="rounded"
                width={500}
                height={500}
              />
            </div>
          )}
          <div className="mt-12 flex justify-center">
            <SubmitButton
              type="submit"
              text="Upload Image"
              icon="upload"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddImagePage
