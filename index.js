import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
import postRouter from "./routers/post.router.js";
import commentRouter from "./routers/comment.router.js";
const server = express();
dotenv.config();
server.use(express.json());
server.use("/api/user", userRouter);
server.use("/api/post", postRouter);
server.use("/api/comment", commentRouter);
server.listen(process.env.PORT, () => {
  console.log(`server is conneted at  ${process.env.PORT}`);
});
