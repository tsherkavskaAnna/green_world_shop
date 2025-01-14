module.exports = ({ env }) => ({
  upload: {
    provider: 'supabase', 
    providerOptions: {
      apiUrl: env('SUPABASE_API_URL'), 
      apiKey: env('SUPABASE_ANON_KEY'), 
      bucket: env('SUPABASE_BUCKET'),
      
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});