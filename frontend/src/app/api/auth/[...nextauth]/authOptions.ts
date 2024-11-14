
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import axios from 'axios';
import { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
    signOut: "/dashboard",
    error: 'auth/error'
  },
  debug: true,
  session: {
    strategy: "jwt", 
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      // Aggiorna il token JWT con i dati utente
      session.jwt = token.jwt;
      session.user = token;
      return Promise.resolve(session);
    },
    async jwt({ token, user, account }: any) {
     if(user) {
      token.jwt = user.jwt;
     }
      if(account && account.provider === 'google') {
        try {
          console.log("Google Account:::::::: ", account);
          const public_url = process.env.NEXT_PUBLIC_API_URL;
          const response = await fetch(
              `${public_url}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
          );
          const data = await response.json();
          console.log("Strapi Callback Data:::::::::::::: ", data);
          token.jwt = data.jwt;
          token.id = data.user.id;
      } catch (error) {
          console.error('Fetch failed:', error);
      }
        
      }
      return Promise.resolve(token)
    }
  }
}


