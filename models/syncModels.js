import db from "./config/Database.js";
import Users from "../models/UserModel.js"; // Sesuaikan path-nya

async function syncModels() {
  try {
    await db.sync(); // Menyinkronkan semua model ke database
    console.log("Models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize models:", error);
  }
}

syncModels();
