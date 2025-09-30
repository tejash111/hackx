import mongoose from "mongoose";
import hackathonRoutes from "./routes/hackathon.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";


dotenv.config();
const app = express();
app.use(cors());



app.use("/api/hackathon", hackathonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
