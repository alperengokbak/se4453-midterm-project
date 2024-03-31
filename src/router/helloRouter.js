// Initializing express router
import Router from "express";

// Importing Controller class
import { hello } from "../controller/helloController.js";

const router = Router();

router.get("/", hello);

export default router;
