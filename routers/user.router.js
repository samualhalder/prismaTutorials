import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();

router
  .get("/get-user/:userId", getUserById)
  .post("/signup", createUser)
  .put("/update-user/:userId", updateUser)
  .delete("/delete-user/:userId", deleteUser);
export default router;
