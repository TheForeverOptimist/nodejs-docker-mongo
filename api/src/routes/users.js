import express from "express";

const userRouter = express.Router();

export const userRoutes = (router) => {
  
  router.use("/", userRouter);

  userRouter.get("/user", (req, res) => {
    console.log(`ℹ️ - User handler pinged`);
    res.status(200).json({
        code: 200,
        message: `✅ - Pong: test successful`
    })
  });
};
