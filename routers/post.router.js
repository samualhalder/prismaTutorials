import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
} from "../controllers/post.controller.js";
const router = Router();

router
  .get("/get-post/:userId", getPostById)
  .get("/get-all-posts", getAllPosts)
  .post("/create-post", createPost);
export default router;
