import createConnectionPool, {
  sql,
  ConnectionPool,
  Transaction,
  ConnectionPoolConfig,
} from "@databases/pg";
import dotenv from "dotenv";

dotenv.config();
export const config: ConnectionPoolConfig = {
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
};

const db = createConnectionPool(config);

process.once("SIGTERM", () => {
  db.dispose().catch((ex) => {
    console.error(ex);
  });
});

export default db;
export { sql, ConnectionPool, Transaction };
