'use client'

import { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import { SubmitButton } from '../components/Buttons'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: any) => {
    setLoading(true)

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value)
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      console.log('Message sent successfully')
      setLoading(false)
      // reset the form
      event.target.name.value = ''
      event.target.email.value = ''
      event.target.message.value = ''
    }
    if (!response.ok) {
      console.log('Error sending message')
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-20 mt-20 flex w-[90%] items-center justify-center rounded-md bg-plt-nav text-plt-hv ring-4 ring-plt-nav ring-offset-4 md:mb-32 md:mt-28 md:w-[60%]">
        <form onSubmit={handleSubmit} className="w-[95%] md:w-[85%]">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <FiMail className="mt-12 h-24 w-24" />
            </div>
            <h2 className="text-center text-3xl font-semibold tracking-wide">
              Contact Us
            </h2>
            <div className="mt-5 flex flex-col">
              <label className="mt-3 font-semibold md:text-lg" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className="h-12 rounded p-2 text-black"
                autoComplete="off"
                id="name"
              />
            </div>
            <div className="my-4 flex w-full flex-col">
              <label className="text-lg font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                minLength={5}
                maxLength={150}
                required
                className="h-12 rounded p-2 text-black"
                autoComplete="off"
                id="email"
              />
            </div>
            <div>
              <label className="text-lg font-semibold" htmlFor="message">
                Message:
              </label>
              <textarea
                rows={4}
                required
                minLength={10}
                maxLength={500}
                name="message"
                className="h-40 w-full rounded p-2 text-black"
              />
            </div>
            <div className="my-12 flex items-center justify-center">
              <SubmitButton
                type="submit"
                disabled={loading}
                icon="send"
                text="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
