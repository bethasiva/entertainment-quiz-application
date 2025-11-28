export const ENV = {
  PG_DATABASE_NAME: process.env.PG_DATABASE_NAME ?? "postgres",
  PG_DATABASE_HOST: process.env.PG_DATABASE_HOST ?? "localhost",
  PG_DATABASE_PORT: Number(process.env.PG_DATABASE_PORT) || 5432,
  PG_DATABASE_USERNAME: process.env.PG_DATABASE_USERNAME ?? "postgres",
  PG_DATABASE_PASSWORD: process.env.PG_DATABASE_PASSWORD ?? "",

  // Add other app-wide env variables here
  APP_PORT: Number(process.env.APP_PORT) || 3000,
  APP_BASE_URL: process.env.APP_BASE_URL!, // For backend api calls
  QUIZ_QUESTIONS_API_ENDPOINT: process.env.QUIZ_QUESTIONS_API_ENDPOINT!, // To fetch quiz data from a thrid party service
};
