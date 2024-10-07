import { Router } from "express";
import {
  createComment,
  getCommentById,
} from "../controllers/comment.controller.js";
const router = Router();

router
  .get("/get-comment/:userId", getCommentById)
  .post("/create-comment", createComment);
export default router;
