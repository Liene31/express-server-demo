import express from "express";
import router from "./routes/index.js";

const PORT = 8000;

const app = express();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
