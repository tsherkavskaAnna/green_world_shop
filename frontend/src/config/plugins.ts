export default ({ env }: any) => ({
 
  'users-permissions': {
    config: {
      register: {
        allowedFields: ['username', 'email'],  
      },
    },
  },
  
  'email': {
    config: {
      provider: 'sendmail',
      providerOptions: {},
      settings: {
        defaultFrom: 'no-reply@example.com',
        defaultReplyTo: 'no-reply@example.com',
      },
    },
  },
  
  'upload': {
    config: {
      provider: 'local',
      providerOptions: {},
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
