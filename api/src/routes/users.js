import express from "express";
import { UserService } from "../services/user/UserService.js";
import { User } from "../models/UserSchema.js";

const userRouter = express.Router();

export const userRoutes = (router) => {
  router.use("/user", userRouter);

  userRouter.get("/:_id", async (req, res) => {
    console.log(`ℹ️ - User handler pinged`);
    const id = req.params._id;

    UserService.get(id)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json({ message: err.message }));
  });

  userRouter.post("/", async (req, res) => {
    console.log(`ℹ️ - User POST hit`);

    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  userRouter.put("/:_id", async (req, res) => {
    console.log(`ℹ️ - User PUT hit`);
    const id = req.params._id;
    const data = req.body;

    try {
      const user = await UserService.update(id, data);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  userRouter.delete("/:_id", (req, res) => {
    console.log(`ℹ️ - User DELETE hit`);

    const id = req.params._id;

    UserService.delete(id)
      .then((user) => {
        if (user) {
          res.status(200).json({
            message: `User with ${id} has been deleted`,
          });
        } else {
          res.status(404).json({
            message: `User with ${id} not found`,
          });
        }
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  });
};
