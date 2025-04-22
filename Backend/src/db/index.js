import { DB_NAME } from "../constants.js";
import mysql from "mysql2/promise";

let db = null; // Initialize db variable

const Connection = async () => {
  try {
    if (!db) {
      // Check if db is not already initialized
      db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
      });
      console.log("Connected to the database successfully to " + DB_NAME);
    }
    return db; // Return the db connection
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export default Connection;
export { db }; // Export the db variable for use in other modules
