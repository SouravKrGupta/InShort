import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./defaults.js";
import route from "./routes/route.js";
import path from "path";
const app = express();

dotenv.config();

app.use(cors());
app.use("/", route);

//static file
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () =>
  console.log(`server is running sucessfully on PORT ${PORT}`)
);

DefaultData();
