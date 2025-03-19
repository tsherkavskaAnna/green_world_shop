import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DefaultSession, NextAuthOptions } from 'next-auth';

declare module 'next-auth' {
  interface User {
    strapiToken?: string;
    strapiUserId?: string;
  }

  interface Session {
    user: {
      strapiToken?: string;
      strapiUserId?: string;
    } & DefaultSession['user'];
    accessToken?: string;
  }
  interface JWT {
    accessToken?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const url =
          'https://green-world-shop.vercel.app/api/auth/providers/api/auth/local';
        const body = JSON.stringify({
          identifier: credentials?.email,
          password: credentials?.password,
        });

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: body,
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error('Errore durante il login');
        }

        return {
          name: data.user.username,
          email: data.user.email,
          id: data.user.id.toString(),
          strapiUserId: data.user.id,
          blocked: data.user.blocked,
          strapiToken: data.jwt,
        };
      },
    }),
  ],

  pages: {
    signIn: '/auth/login',
    signOut: '/dashboard',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 giorni
    updateAge: 24 * 60 * 60, // 24 ore
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const strapiResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/callback?access_token=${account.access_token}`
        );

        if (!strapiResponse.ok) {
          return false;
        }

        const strapiData = await strapiResponse.json();

        user.strapiToken = strapiData.jwt;
        user.strapiUserId = strapiData.user.id;
      }

      return true;
    },
    async jwt({ token, user, account }) {
      if (user && account?.provider === 'google') {
        token.strapiToken = user.strapiToken;
        token.strapiUserId = user.strapiUserId;
      }

      if (user && account?.provider === 'credentials') {
        token.strapiToken = user.strapiToken;
        token.strapiUserId = user.strapiUserId;
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          strapiToken: token.strapiToken,
          strapiUserId: token.strapiUserId,
        },
      };
    },
  },
};
