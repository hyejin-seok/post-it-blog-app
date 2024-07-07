import React from 'react'
import { PiSpinnerGapBold } from 'react-icons/pi'

export default function Loading() {
  return (
    <div className="text-plt-text flex min-h-screen flex-col items-center justify-center bg-plt-base">
      <div className="animate-spin text-5xl">
        <PiSpinnerGapBold />
      </div>
      <p className="text-2xl">Loading...</p>
    </div>
  )
}
