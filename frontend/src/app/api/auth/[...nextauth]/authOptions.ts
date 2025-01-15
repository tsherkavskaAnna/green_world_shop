import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { loginWithCredentials } from '@/app/services/auth-service';


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
        try {
          const data = await loginWithCredentials(
            credentials!.email,
            credentials!.password
          );
          return {
            name: data.user.username,
            email: data.user.email,
            id: data.user.id.toString(),
            strapiUserId: data.user.id,
            blocked: data.user.blocked,
            strapiToken: data.jwt,
          };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          throw new Error('Errore durante il login');
        }
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
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, account, user }: any) {
      if (account && account.provider === 'google') {
        // Gestisci autenticazione Google con Strapi
        const strapiResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google/callback?access_token=${account.access_token}`
        );
        const strapiData = await strapiResponse.json();

        token.strapiToken = strapiData.jwt;
        token.strapiUserId = strapiData.user.id;
        token.blocked = strapiData.user.blocked;
      }

      if (user && account?.provider === 'credentials') {
        // Aggiungi dati per il provider Credentials
        token.strapiToken = user.strapiToken;
        token.strapiUserId = user.strapiUserId;
        token.blocked = user.blocked;
      }

      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      session.user.id = token.sub;
      session.user.strapiUserId = token.strapiUserId;
      session.user.strapiToken = token.strapiToken;
      session.user.blocked = token.blocked;
      return session;
    },
  },
};
