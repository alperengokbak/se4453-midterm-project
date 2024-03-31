// Import express
import express from "express";

// Import routes
import router from "./src/router/helloRouter.js";

const app = express();
const PORT = 3000;

app.use("/hello", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port.`);
});
