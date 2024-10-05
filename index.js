import express from "express";
import dotenv from "dotenv";
const server = express();
dotenv.config();
server.get("/", (req, res) => {
  res.send("hello world");
});
server.listen(8080, () => {
  console.log("server is conneted at 8080");
});
