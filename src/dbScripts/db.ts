import { ENV } from "@constants";
import { Pool } from "pg";
import initSchema from "./initSchema";

const postgresConfig = {
  database: ENV.PG_DATABASE_NAME,
  host: ENV.PG_DATABASE_HOST,
  port: ENV.PG_DATABASE_PORT,
  user: ENV.PG_DATABASE_USERNAME,
  password: ENV.PG_DATABASE_PASSWORD,
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(postgresConfig);

/**
 * Initialize database schema once at startup.
 */
const initializeDatabase = async () => {
  try {
    console.info("[DB] Connecting to Postgres...");
    const client = await pool.connect();
    client.release();

    console.info("[DB] Connection established.");
    await initSchema(pool);
    console.info("[DB] Schema initialization complete.");
  } catch (err) {
    console.error("[DB] Initialization failed:", err);
    process.exit(1);
  }
};

// Handle pool errors globally
pool.on("error", (err) => {
  console.error("[DB] Unexpected error on idle client:", err);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.info("[DB] Closing pool due to SIGINT...");
  await pool.end();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.info("[DB] Closing pool due to SIGTERM...");
  await pool.end();
  process.exit(0);
});

// Kick off initialization immediately
initializeDatabase();

export default pool;
