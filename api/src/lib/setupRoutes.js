import express from "express";

const router = express.Router();

export const setupRoutes = (app) => {
  console.log(`\n Testing setup routes function...\n `);

  router.use("/", (req, res) => {
    console.log(`\n1 - Main router middleware function activated`);
    res.sendStatus(200);
  });

  app.use('/api', router)


};
