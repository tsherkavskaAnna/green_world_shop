
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import axios from 'axios';
import { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";

        // Chiamata all'API di Strapi per l'autenticazione
        try {
          const response = await axios.post('http://localhost:1337/api/auth/local', {
            identifier: email,
            password: password,
          });

          const user = response.data.user;
          const jwt = response.data.jwt;

          if (user) {
            // Restituisci l'utente con il token JWT
            return { ...user, jwt };
          }
        } catch (error) {
          throw new Error('Credenziali non valide');
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/register',
    signOut: '/auth/signout',
  },
  session: {
    strategy: "jwt", 
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development' ? true : false,
}


