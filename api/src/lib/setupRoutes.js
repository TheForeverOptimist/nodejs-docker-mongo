import express from "express";
import routes from "../routes/index.js";

export const setupRoutes = (app) => {
  const router = routes();
  app.use("/api", router);
};
