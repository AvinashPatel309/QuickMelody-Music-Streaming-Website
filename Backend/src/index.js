import { app } from "./app.js";
import dotenv from "dotenv";
import Connection from "./db/index.js";

dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT || 3001;

Connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });
