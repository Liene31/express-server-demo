import express from "express";
import router from "./routes/index.js";
import { logMiddleware } from "./middlewares/log.middleware.js";
import mongoose from "mongoose";
import cors from "cors";

const { PORT, DB_CONNECTION } = process.env;

const app = express();

app.use(express.json());
app.use(logMiddleware());

// CORS Middleware
// Allows everything (good for development)

app.use(cors());

// Configuration for production
// Allows only specific origin
// origin: "http://<url_vercel>:5173"--> if the project on vercel
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     header,
//   }),
// );

//Important to connect to DB before router
app.use(async (req, res, next) => {
  try {
    await mongoose.connect(DB_CONNECTION, { dbName: "TaskManager" });
    console.log("Connection successful to DB");
    next();
  } catch (err) {
    console.log(`Connection failed with error ${err}`);
    res
      .status(500)
      .json({ statusCode: 500, message: "Impossible to connect to DB" });
  }
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
