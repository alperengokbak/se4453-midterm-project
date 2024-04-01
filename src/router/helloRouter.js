// Initializing express router
import Router from "express";

// Importing Controller class
import { hello, helloQuery } from "../controller/helloController.js";

const router = Router();

router.get("/", hello);
router.get("/hello", helloQuery);

export default router;
