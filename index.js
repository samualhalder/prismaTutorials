import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
const server = express();
dotenv.config();
server.use(express.json());
server.use("/api/user", userRouter);
server.listen(process.env.PORT, () => {
  console.log(`server is conneted at  ${process.env.PORT}`);
});
