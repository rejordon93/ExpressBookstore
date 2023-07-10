import pkg from "pg";
const { Client } = pkg;
import { DB_URI } from "./config.js";

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

export default db;
