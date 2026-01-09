import express from "express";
import router from "./routes/index.js";
import { logMiddleware } from "./middlewares/log.middleware.js";

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(logMiddleware());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
