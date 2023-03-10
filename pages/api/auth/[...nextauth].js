import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "../../../lib/prisma";

const bcrypt = require("bcrypt");

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (
            credentials.email === user.email &&
            bcrypt.compareSync(credentials.password, user.password)
          ) {
            return user;
          }
          throw new Error("Incorrect Credentials");
        } catch (error) {
          throw new Error("Incorrect Credentials");
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
};

export default NextAuth(authOptions);
