// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ env }: any) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      register: {
        allowedFields: ['username'],
      },
      providers: {
        google: {
          enabled: true,
          key: env('GOOGLE_CLIENT_ID'),
          secret: env('GOOGLE_CLIENT_SECRET'),
          redirect_uri:
            'https://green-world-backend.up.railway.app/api/connect/google/callback',
          scope: ['user', 'user:email', 'sessions'],
        },
      },
    },
  },
});
