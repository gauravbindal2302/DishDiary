import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "./config.env" });

const server = express();

server.use(express.json());
server.use(cors());

const DB = process.env.DATABASE_URL;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((error) => {
    console.error("Error connecting to Database!", error);
  });

server.get("/", (req, res) => {
  res.send("Hello! Server is Up");
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
