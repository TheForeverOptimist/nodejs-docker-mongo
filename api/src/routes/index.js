import express from "express";
import { defaultRoutes } from "./defaults.js";
import { userRoutes } from "./users.js";
import config from "../lib/config.js";

export default () => {
  const router = express.Router();

  if (config.routes.users) {
    userRoutes(router);
  }

  if (config.routes.default) {
    defaultRoutes(router);
  }

  return router;
};
