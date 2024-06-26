// Import express
import express from "express";
import cors from "cors";

// Import routes
import router from "./src/router/helloRouter.js";

const app = express();
const PORT = 8080;

app.use(cors());

app.use("/hello", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port.`);
});
