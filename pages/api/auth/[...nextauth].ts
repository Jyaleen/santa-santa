// pages/api/auth/[...nextauth].ts
import { PrismaClient } from "@prisma/client"
import { NextApiHandler } from 'next';
import { Adapter } from "next-auth/adapters";
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prismadb';

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

// const prisma = new PrismaClient()

// const options = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   callbacks: {
//     session: async (session, token) => {
//       session.userId = token.sub
//       return session
//     }
//   },
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.SECRET,
//   pages: {
//     signIn: '/login',
//   }
// };

// export default (req, res) => NextAuth(res, res, {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
// })

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)