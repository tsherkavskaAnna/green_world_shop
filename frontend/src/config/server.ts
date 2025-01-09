// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ env }: any) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('', 'http://localhost:1337'),
});
