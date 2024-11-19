import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
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
    signIn: '/auth/login',
    signOut: "/dashboard",
    error: '/auth/error'
  },
  session: {
    strategy: "jwt", 
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('jwt callback', { token, user, account });

      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
        token.sub = user.id;
      }
      return token; 
    },
    async session({ token, session }: any) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture;

      return session;
    },
  },
  }


