//TODO - import setupMongo function
import { setupMongo } from "./mongo.js";
import { setupRoutes } from "../setupRoutes.js";

export const initializeApp = async (app, config) => {
  // initialize mongodb
  setupMongo(config);

  console.log(`\n ✅ - MongoDB setup and connected`);

  setupRoutes(app);

  console.log(`Initialized main app router...`);
};
