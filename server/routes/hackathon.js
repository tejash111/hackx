import express from "express";
import { uploadHackathon } from "../controllers/hackathonController.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.post("/upload", upload.single("image"), uploadHackathon);

export default router;
