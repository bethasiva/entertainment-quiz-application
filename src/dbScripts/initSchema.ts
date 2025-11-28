import { Pool, PoolClient } from "pg";
import {quizTablesSchema } from "@quiz/dbScripts";

/**
 * Creates the quiz_scores table if it does not exist.
 */
export const createTables = async (client: PoolClient): Promise<void> => {
  for (const table of quizTablesSchema) {
    await client.query(table);
  }

  console.info("[DB] quiz_scores table ensured.");
};

const initSchema = async (pool: Pool): Promise<void> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await createTables(client);
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("[DB] Schema initialization failed:", err);
    throw err;
  } finally {
    client.release();
  }
};

export default initSchema;