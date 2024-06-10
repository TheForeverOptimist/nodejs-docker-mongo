import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  const router = express.Router();

  router.use("/", (req, res, next) => {
    console.log(`1 - router middleware function one`);
    next();
  });

  httpServer.get("/api/ping", (req, res) => {
    console.log(`🛠️ - Ping route: ${req.url} ${Date.now()}`);
    res.status(200).json({
      message: `✅ - Pong: test succesful`,
    });
  });

  router.all("*", (req, res) => {
    console.log(`2 - router middleware catch all`);
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  httpServer.use("/", router);

  //TODO -- abstract this to the router
  //TEST route for port config

  try {
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
