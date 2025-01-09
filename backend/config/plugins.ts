module.exports = ({ env }) => ({
  upload: {
    provider: 'supabase', 
    providerOptions: {
      apiUrl: env('SUPABASE_URL'), 
      bucket: env('SUPABASE_BUCKET'),
      apiKey: env('SUPABASE_ANON_KEY'), 
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});