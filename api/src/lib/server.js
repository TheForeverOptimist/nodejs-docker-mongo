import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  //TODO -- abstract this to the router
  //TEST route for port config
  httpServer.get("/ping", (req, res) => {
    console.log(`🛠️ - Ping route: ${req.url} ${Date.now()}`);
    res.status(200).json({
      message: `✅ - Pong: test succesful`,
    });
  });

  try {
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
