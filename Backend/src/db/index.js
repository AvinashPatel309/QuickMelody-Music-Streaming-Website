import {
  DB_NAME,
  USER_TABLE,
  ARTIST_TABLE,
  ALBUM_TABLE,
  SONG_TABLE,
  PLAYLIST_TABLE,
  PLAYLIST_SONG_TABLE,
  LIKES_TABLE,
} from "../constants.js";
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
        // database: DB_NAME,
      });

      // Create the database if it doesn't exist
      await db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
      await db.query(`USE ${DB_NAME}`); // Use the created database
      await db.query(USER_TABLE); // Create the user table
      await db.query(ARTIST_TABLE); // Create the artist table
      await db.query(ALBUM_TABLE); // Create the album table
      await db.query(SONG_TABLE); // Create the song table
      await db.query(PLAYLIST_TABLE); // Create the playlist table
      await db.query(PLAYLIST_SONG_TABLE); // Create the playlist song table
      await db.query(LIKES_TABLE); // Create the likes table

      console.log("Database and tables created successfully");
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
