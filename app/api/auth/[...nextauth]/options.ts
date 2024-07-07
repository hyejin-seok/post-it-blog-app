import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Username??'
        },
        password: {
          label: 'Password:',
          type: 'password'
        }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        })

        if (!user) return null

        const isPasswordCorrect = credentials.password === user.password

        if (!isPasswordCorrect) return null

        return user
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}
