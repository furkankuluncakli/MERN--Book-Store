import express, { json } from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  return res.status(200).send("AMUNAGOYUM");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("successfully connected");
    app.listen(PORT, () => {
      console.log(`Server hosting on: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
