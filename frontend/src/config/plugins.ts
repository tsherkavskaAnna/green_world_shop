export default ({ env }: any) => ({
 
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      register: {
        allowedFields: ["username"],
      },
      providers: {
        github: {
          enabled: true,
          key: env('GITHUB_CLIENT_ID'),
          secret: env('GITHUB_CLIENT_SECRET'),
          redirect_uri: 'http://localhost:1337/api/connect/github/callback',
          scope: ['user', 'user:email', 'sessions']
        }
      }
    }
  },
});
